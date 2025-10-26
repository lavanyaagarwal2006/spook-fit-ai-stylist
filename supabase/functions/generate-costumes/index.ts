import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CostumeRequest {
  answers: {
    gender?: string;
    style?: string[];
    budget?: string;
    approach?: string;
    time?: string;
    group?: string;
    interests?: string[];
    specific_interests?: string;
    general_interests?: string;
    past?: string;
  };
  previousSuggestions?: string[];
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { answers, previousSuggestions = [] }: CostumeRequest = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an expert Halloween costume consultant with deep knowledge of pop culture, fashion, and costume design. Generate 5 HIGHLY PERSONALIZED, SPECIFIC CHARACTER-BASED costume recommendations.

Respond ONLY with valid JSON in this exact format:
{
  "costumes": [
    {
      "name": "Character Name (Source)",
      "description": "Detailed 2-3 sentence description of the ICONIC outfit with specific colors, key pieces, and distinguishing features",
      "imageSearch": "Exact Google Images search query optimized for costume reference photos",
      "why": "2-3 sentences explaining SPECIFICALLY how this matches their gender, interests, style preferences, and constraints",
      "difficulty": "Easy/Medium/Hard",
      "cost": "$XX-XX",
      "time": "X-X hours",
      "category": "scary/funny/pop-culture/classic/creative/sexy"
    }
  ]
}`;

    const genderGuidance = answers.gender === 'any' 
      ? '→ User is open to ALL costume types regardless of traditional gender presentation' 
      : answers.gender === 'non-binary' 
      ? '→ Focus on gender-neutral or androgynous characters' 
      : `→ Prioritize ${answers.gender} characters, but consider gender-neutral options too`;

    const styleGuidance = (answers.style || []).map(style => {
      switch(style) {
        case 'scary': return '→ Include horror movie characters, creepy creatures, villains';
        case 'funny': return '→ Include comedic characters, meme-worthy costumes, silly concepts';
        case 'pop-culture': return '→ Include trending characters from 2024-2025 media';
        case 'classic': return '→ Include timeless Halloween icons (vampires, witches, monsters)';
        case 'creative': return '→ Include unique, artistic, or unconventional characters';
        case 'sexy': return '→ Include glamorous, form-fitting, or alluring character interpretations';
        default: return '';
      }
    }).filter(Boolean).join('\n  ');

    const budgetGuidance = answers.budget === 'low' 
      ? '→ Suggest costumes achievable under $30, focus on simple DIY options'
      : answers.budget === 'medium' 
      ? '→ Suggest costumes in $30-75 range, mix of buy and DIY'
      : answers.budget === 'high'
      ? '→ Suggest costumes in $75-150 range, can include more elaborate options'
      : '→ Suggest premium costumes $150+, no budget restrictions';

    const approachGuidance = answers.approach === 'buy'
      ? '→ Suggest characters with readily available commercial costumes'
      : answers.approach === 'diy'
      ? '→ Suggest characters achievable through DIY/crafting'
      : '→ Suggest characters that work well with mix of bought and DIY elements';

    const timeGuidance = answers.time === 'rushed'
      ? '→ ONLY suggest Easy difficulty costumes achievable in 1-2 days'
      : answers.time === 'moderate'
      ? '→ Suggest Easy to Medium difficulty costumes'
      : '→ Can suggest any difficulty including elaborate Hard costumes';

    const groupGuidance = answers.group === 'solo'
      ? '→ Suggest individual character costumes'
      : answers.group === 'couple'
      ? '→ Suggest characters that work as couples/pairs OR standalone'
      : '→ Suggest characters that work for groups OR standalone';

    const userPrompt = `USER PROFILE ANALYSIS:
====================

IDENTITY & PRESENTATION:
- Gender identity: ${answers.gender || "Not specified"}
  ${genderGuidance}

STYLE PREFERENCES (CRITICAL):
- Selected styles: ${(answers.style || []).join(", ") || "Not specified"}
  ${(answers.style || []).length > 0 ? '→ Every suggestion MUST match at least one of these style preferences' : ''}
  ${styleGuidance}

PRACTICAL CONSTRAINTS:
- Budget: ${answers.budget || "Not specified"}
  ${budgetGuidance}

- Preferred approach: ${answers.approach || "Not specified"}
  ${approachGuidance}

- Time available: ${answers.time || "Not specified"}
  ${timeGuidance}

- Group dynamics: ${answers.group || "Not specified"}
  ${groupGuidance}

INTEREST-BASED MATCHING (MOST IMPORTANT):
- Broad categories: ${(answers.interests || []).join(", ") || "Not specified"}
- Specific interests: "${answers.specific_interests || "Not provided"}"
- General hobbies: "${answers.general_interests || "Not provided"}"

CRITICAL MATCHING INSTRUCTIONS:
${answers.specific_interests ? `→ Parse their specific interests carefully. Examples:
  - "Marvel movies" = Suggest Iron Man, Black Widow, Spider-Man, NOT DC characters
  - "DC comics" = Suggest Batman, Harley Quinn, Wonder Woman, NOT Marvel
  - "Hip-hop music" = Suggest Tupac, Missy Elliott, Run DMC, NOT rock stars
  - "K-pop" = Suggest BTS members, Blackpink, K-pop idol style
  - "Anime like Attack on Titan" = Suggest characters from that specific anime
  - "Retro gaming" = Suggest Pac-Man, Mario, Sonic, NOT modern game characters
` : ''}

${answers.general_interests ? `→ Use general hobbies for creative connections:
  - "Football" = Suggest athletes, sports movie characters (Remember the Titans, Friday Night Lights)
  - "Technology" = Suggest Steve Jobs, tech movie characters (Social Network, Silicon Valley)
  - "Cooking" = Suggest chef characters (Ratatouille, The Bear, Hell's Kitchen)
  - "Travel" = Suggest iconic cultural figures, Indiana Jones, explorer characters
` : ''}

PAST COSTUME CONTEXT:
- Previous experience: "${answers.past || "Not provided"}"
${answers.past ? `→ If they loved a past costume, suggest similar characters from that franchise/genre
→ If they want to avoid something, absolutely DO NOT suggest similar costumes` : ''}

PREVIOUSLY SUGGESTED (DO NOT REPEAT):
${previousSuggestions.length > 0 ? previousSuggestions.map(name => `- ${name}`).join('\n') : 'None'}

OUTPUT REQUIREMENTS:
====================
Generate 5 costumes that:
1. MATCH THE GENDER PREFERENCE (or work for any gender if applicable)
2. STRONGLY ALIGN with their specific interests (not just broad categories)
3. FIT their style preferences (must match at least one selected style)
4. RESPECT their budget, time, and approach constraints
5. Are SPECIFIC CHARACTERS with clear names (no generic concepts)
6. Have DETAILED visual descriptions of the most iconic outfit
7. Include Google Images search query for reference photos
8. Explain WHY this matches their unique profile

CHARACTER NAMING GUIDELINES:
- ✅ GOOD: "Spider-Man (Tobey Maguire)", "The Joker (Heath Ledger)", "Princess Peach"
- ❌ BAD: "Beetlejuice from Beetlejuice", "Generic superhero", "Scary clown"
- Use format: "Character Name (Source)" or just "Character Name" if obvious`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI quota exceeded. Please contact support." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No content in AI response");
    }

    const parsed = JSON.parse(content);
    
    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in generate-costumes:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
