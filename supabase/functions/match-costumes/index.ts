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

    // Build user profile summary
    const userSummary = `
USER PROFILE:
- Gender: ${userProfile.gender}
- Style preferences: ${(userProfile.style || []).join(', ')}
- Budget: ${userProfile.budget}
- Approach: ${userProfile.approach}
- Time available: ${userProfile.time}
- Group: ${userProfile.group}
- Broad interests: ${(userProfile.interests || []).join(', ')}
- Specific interests: "${userProfile.specific_interests || 'Not provided'}"
- General hobbies: "${userProfile.general_interests || 'Not provided'}"
- Past costume experience: "${userProfile.past || 'Not provided'}"
    `.trim();

    // Build costume database summary
    const availableCostumes = costumeDatabase
      .filter((c: any) => !excludeNames.includes(c.name))
      .map((costume: any, idx: number) => 
        `${idx}. ${costume.name} from ${costume.source} [Genders: ${costume.genders.join('/')}, Tags: ${costume.tags.join(', ')}]`
      ).join('\n');

    const systemPrompt = `You are an expert Halloween costume matchmaker. Analyze the user's profile and select the TOP ${count} costume matches from the available database.`;

    const userPrompt = `${userSummary}

AVAILABLE COSTUMES DATABASE (${costumeDatabase.filter((c: any) => !excludeNames.includes(c.name)).length} costumes):
${availableCostumes}

MATCHING INSTRUCTIONS:

1. **Deep Understanding**: Read between the lines of what the user wrote. Examples:
   - "Christopher Nolan films" → Matches Batman, Joker, complex characters
   - "90s nostalgia" → Matches Friends characters, Fresh Prince, retro gaming
   - "Japanese culture" → Matches anime characters, samurai, Japanese video game characters
   - "I love true crime podcasts" → Matches detective characters, FBI agents, mystery solvers
   - "Really into fitness and gym" → Matches athletic characters, superheroes with visible muscles

2. **Interest Prioritization**: 
   - Specific interests are MOST important (e.g., if they mention "Marvel", prioritize Marvel characters heavily)
   - General hobbies provide creative connections (e.g., "football" → sports movie characters)
   - Past experience matters (if they loved something, suggest similar; if they hated something, avoid it)

3. **Style Matching**:
   - User's selected styles MUST align with costume vibes
   - If they selected "scary" → prioritize horror, villains, dark characters
   - If they selected "funny" → prioritize comedic, meme-worthy, silly costumes
   - If they selected "sexy" → prioritize form-fitting, glamorous, alluring interpretations

4. **Gender Consideration**:
   - Prioritize costumes that match their gender identity
   - But remember some costumes work for ANY gender (e.g., Ghostface, monsters, animals)
   - If gender is "any", feel free to suggest everything

5. **Practical Constraints**:
   - Budget ${userProfile.budget} should influence complexity
   - Time ${userProfile.time} should influence difficulty
   - Approach ${userProfile.approach} should influence costume type

6. **Avoid Repetition**: 
   - DO NOT select any costumes from this list: ${excludeNames.join(', ') || 'None yet'}
   - Ensure variety in your selections (don't pick 5 Marvel characters if there are other good options)

7. **Quality Over Quantity**: Only suggest costumes you're CONFIDENT about. If there aren't ${count} great matches, suggest fewer.

RESPONSE FORMAT (JSON only, no preamble):
{
  "matches": [
    {
      "costumeIndex": 0,
      "costumeName": "Exact name from database",
      "matchScore": 95,
      "reasoning": "2-3 sentences explaining WHY this is a great match for this specific user, referencing their actual interests/words"
    }
  ],
  "totalAnalyzed": ${costumeDatabase.filter((c: any) => !excludeNames.includes(c.name)).length}
}

Return the top ${count} matches, ordered by matchScore (highest first).`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "match_costumes",
              description: "Return the top costume matches for the user",
              parameters: {
                type: "object",
                properties: {
                  matches: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        costumeIndex: { type: "number" },
                        costumeName: { type: "string" },
                        matchScore: { type: "number" },
                        reasoning: { type: "string" }
                      },
                      required: ["costumeIndex", "costumeName", "matchScore", "reasoning"],
                      additionalProperties: false
                    }
                  },
                  totalAnalyzed: { type: "number" }
                },
                required: ["matches", "totalAnalyzed"],
                additionalProperties: false
              }
            }
          }
        ],
        tool_choice: { type: "function", function: { name: "match_costumes" } }
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'API quota exceeded. Please add credits to continue.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const toolCall = data.choices[0].message.tool_calls?.[0];
    const matchData = JSON.parse(toolCall.function.arguments);

    // Map AI selections back to full costume objects
    const filteredDatabase = costumeDatabase.filter((c: any) => !excludeNames.includes(c.name));
    const selectedCostumes = matchData.matches.map((match: any) => {
      const costume = filteredDatabase[match.costumeIndex];
      return {
        ...costume,
        matchScore: match.matchScore,
        aiReasoning: match.reasoning
      };
    });

    return new Response(
      JSON.stringify({ costumes: selectedCostumes }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in match-costumes function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
