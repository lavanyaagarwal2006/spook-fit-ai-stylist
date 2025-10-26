import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userProfile, costumeDatabase, excludeNames = [], count = 5 } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    // Calculate split: 60% database, 40% generated
    const databaseCount = Math.ceil(count * 0.6); // 3 for count=5
    const generatedCount = count - databaseCount; // 2 for count=5

    console.log(`Hybrid generation: ${databaseCount} from database, ${generatedCount} generated`);

    // STEP 1: Match from database using AI
    const userSummary = `
USER PROFILE:
- Gender: ${userProfile.gender}
- Styles: ${(userProfile.style || []).join(', ')}
- Budget: ${userProfile.budget}
- Time: ${userProfile.time}
- Approach: ${userProfile.approach}
- Broad interests: ${(userProfile.interests || []).join(', ')}
- Specific interests: "${userProfile.specific_interests || ''}"
- General hobbies: "${userProfile.general_interests || ''}"
- Past: "${userProfile.past || ''}"
    `.trim();

    const availableCostumes = costumeDatabase
      .filter((c: any) => !excludeNames.includes(c.name))
      .map((costume: any, idx: number) => 
        `${idx}. ${costume.name} from ${costume.source} [${costume.genders.join('/')}, Tags: ${costume.quickTags.join(', ')}]`
      ).join('\n');

    const databasePrompt = `You are a Halloween costume expert analyzing a database of ${costumeDatabase.length} costumes.

${userSummary}

DATABASE (showing ${costumeDatabase.filter((c: any) => !excludeNames.includes(c.name)).length} available costumes):
${availableCostumes}

TASK: Select the TOP ${databaseCount} costume matches from this database that best fit this user.

MATCHING RULES:
1. **Deep Understanding**: Read between the lines
   - "Christopher Nolan" → Batman, Joker
   - "90s nostalgia" → Friends, Fresh Prince, retro games
   - "K-pop" → BTS, BLACKPINK, Korean idols
   - "fitness enthusiast" → Athletic superheroes, sports characters

2. **Priority Order**:
   - Specific interests > General hobbies > Broad categories
   - Past loved costumes = suggest similar
   - Past hated = AVOID completely

3. **Style Match**: User's styles MUST align with costume vibe

4. **Gender**: Prioritize matching gender, but some costumes work for all

5. **Constraints**: Consider budget, time, approach

6. **Variety**: Don't pick all from same franchise unless user specifically loves it

7. **Avoid**: ${excludeNames.join(', ') || 'None yet'}

RESPONSE (JSON only, no markdown):
{
  "matches": [
    {
      "costumeIndex": 0,
      "costumeName": "Exact name from database",
      "matchScore": 95,
      "reasoning": "Why this matches their interests"
    }
  ]
}

Return top ${databaseCount} matches, highest score first.`;

    // Declare variable for generated costumes
    let generatedCostumes: any[] = [];

    // Call AI for database matching
    const databaseResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: 'You are a Halloween costume matching expert. Always respond with valid JSON only.' },
          { role: 'user', content: databasePrompt }
        ],
      }),
    });

    if (!databaseResponse.ok) {
      const errorText = await databaseResponse.text();
      console.error('Database matching error:', databaseResponse.status, errorText);
      throw new Error(`Database matching failed: ${databaseResponse.status}`);
    }

    const databaseData = await databaseResponse.json();
    const databaseText = databaseData.choices[0].message.content;
    const databaseCleaned = databaseText.replace(/```json\n?|\n?```/g, '').trim();
    const databaseParsed = JSON.parse(databaseCleaned);

    // Map indices to actual costumes
    const availableCostumesArray = costumeDatabase.filter((c: any) => !excludeNames.includes(c.name));
    const databaseMatches = databaseParsed.matches.map((match: any) => {
      const costume = availableCostumesArray[match.costumeIndex];
      return {
        ...costume,
        source: "DATABASE",
        matchScore: match.matchScore,
        why: match.reasoning
      };
    });

    console.log(`Matched ${databaseMatches.length} costumes from database`);

    // STEP 2: Generate beyond-database recommendations
    const databaseNames = databaseMatches.map((c: any) => c.name).join(', ');
    
    const generationPrompt = `You are a creative Halloween costume expert. Generate ${generatedCount} UNIQUE costume ideas that go BEYOND the standard database.

${userSummary}

ALREADY SELECTED FROM DATABASE: ${databaseNames}
AVOID THESE: ${excludeNames.join(', ') || 'None yet'}

TASK: Create ${generatedCount} creative costume ideas that:
1. Are NOT in typical costume databases
2. Match the user's specific interests and personality
3. Are more creative/personalized than generic options
4. Are actually wearable/achievable costumes

CREATIVE GUIDELINES:
- For niche interests, suggest specific characters/figures (e.g., "The Bear TV show" → Carmy Berzatto)
- For hobbies, suggest related costumes (e.g., "true crime podcasts" → Crime Scene Investigator)
- For mashups, combine concepts (e.g., "goth + funny" → Goth Barbie)
- For current events, reference 2024-2025 culture
- Think outside typical costume store offerings

RESPONSE (JSON only, no markdown):
{
  "generated": [
    {
      "name": "Creative costume name",
      "source": "Where it's from / concept",
      "genders": ["male", "female", "non-binary"],
      "quickTags": ["tag1", "tag2", "tag3"],
      "matchScore": 90,
      "reasoning": "Why this creative idea fits them"
    }
  ]
}

Return ${generatedCount} truly creative, personalized ideas.`;

    const generationResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: 'You are a creative costume designer. Always respond with valid JSON only.' },
          { role: 'user', content: generationPrompt }
        ],
      }),
    });

    if (!generationResponse.ok) {
      const errorText = await generationResponse.text();
      console.error('Generation error:', generationResponse.status, errorText);
      // Continue without generated costumes if this fails
      generatedCostumes = [];
    } else {
      const generationData = await generationResponse.json();
      const generationText = generationData.choices[0].message.content;
      const generationCleaned = generationText.replace(/```json\n?|\n?```/g, '').trim();
      const generationParsed = JSON.parse(generationCleaned);
      
      generatedCostumes = generationParsed.generated.map((costume: any) => ({
        ...costume,
        source: "GENERATED"
      }));
      
      console.log(`Generated ${generatedCostumes.length} creative costumes`);
    }

    // STEP 3: Combine and enhance with details
    const allCostumes = [...databaseMatches, ...generatedCostumes];

    const enhancementPrompt = `You are a Halloween costume expert. Add detailed information to these pre-selected costumes.

User Profile:
- Budget: ${userProfile.budget}
- Time available: ${userProfile.time}
- Approach: ${userProfile.approach}

Selected Costumes:
${allCostumes.map((c: any, i: number) => `${i + 1}. ${c.name} from ${c.source}\n   Why selected: ${c.why || c.reasoning}\n   Source: ${c.source}`).join('\n\n')}

For EACH costume, provide:

1. **Visual Description**: Detailed description of the MOST ICONIC outfit. Include:
   - Specific colors
   - Key clothing pieces
   - Signature accessories
   - Distinguishing features

2. **Cost Estimate** based on budget and approach:
   - Budget "low" + "buy" = $20-35
   - Budget "low" + "diy" = $10-25
   - Budget "medium" + "buy" = $40-70
   - Budget "medium" + "diy" = $25-45
   - Budget "high" + "buy" = $70-120
   - Budget "high" + "diy" = $40-70
   - Budget "unlimited" = $100-200+

3. **Time Estimate** based on time:
   - "rushed" = Maximum 2-3 hours
   - "moderate" = 3-6 hours
   - "plenty" = 5-15 hours

4. **Difficulty**:
   - Easy = Buy complete OR very simple DIY
   - Medium = Some assembly/makeup/crafting
   - Hard = Advanced skills, complex pieces

5. **Google Images Search Query**: Optimized query for reference photos

6. **Category**: One of: scary, funny, pop-culture, classic, creative, sexy

RESPONSE (JSON only):
{
  "enhancements": [
    {
      "name": "${allCostumes[0]?.name}",
      "description": "Detailed outfit description",
      "cost": "$XX-XX",
      "time": "X-X hours",
      "difficulty": "Easy/Medium/Hard",
      "imageSearch": "search query",
      "category": "category"
    }
  ]
}`;

    const enhancementResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: 'You are a costume details expert. Always respond with valid JSON only.' },
          { role: 'user', content: enhancementPrompt }
        ],
      }),
    });

    if (!enhancementResponse.ok) {
      const errorText = await enhancementResponse.text();
      console.error('Enhancement error:', enhancementResponse.status, errorText);
      throw new Error(`Enhancement failed: ${enhancementResponse.status}`);
    }

    const enhancementData = await enhancementResponse.json();
    const enhancementText = enhancementData.choices[0].message.content;
    const enhancementCleaned = enhancementText.replace(/```json\n?|\n?```/g, '').trim();
    const enhancementParsed = JSON.parse(enhancementCleaned);

    // Merge everything together
    const finalCostumes = allCostumes.map((costume: any, idx: number) => ({
      name: costume.name,
      description: enhancementParsed.enhancements[idx]?.description || `${costume.name} costume`,
      imageSearch: enhancementParsed.enhancements[idx]?.imageSearch || `${costume.name} costume`,
      why: costume.why || costume.reasoning,
      difficulty: enhancementParsed.enhancements[idx]?.difficulty || 'Medium',
      cost: enhancementParsed.enhancements[idx]?.cost || '$40-70',
      time: enhancementParsed.enhancements[idx]?.time || '3-5 hours',
      category: enhancementParsed.enhancements[idx]?.category || 'pop-culture',
      source: costume.source, // "DATABASE" or "GENERATED"
      matchScore: costume.matchScore
    }));

    console.log(`Hybrid recommendations complete: ${finalCostumes.length} total`);

    return new Response(
      JSON.stringify({ recommendations: finalCostumes }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in generate-hybrid function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
