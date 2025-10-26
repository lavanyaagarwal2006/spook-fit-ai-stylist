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
    const { costumes, userProfile } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    const systemPrompt = `You are a Halloween costume expert. Add detailed information to these pre-selected costumes.`;

    const userPrompt = `User Profile:
- Budget: ${userProfile.budget}
- Time available: ${userProfile.time}
- Approach: ${userProfile.approach}

Selected Costumes:
${costumes.map((c: any, i: number) => `${i + 1}. ${c.name} from ${c.source}\n   Why selected: ${c.aiReasoning}`).join('\n\n')}

For EACH costume, provide:

1. **Visual Description**: Detailed description of the MOST ICONIC outfit for this character. Include:
   - Specific colors
   - Key clothing pieces
   - Signature accessories
   - Distinguishing features
   - What makes it instantly recognizable

2. **Cost Estimate** based on user's budget and approach:
   - Budget "low" + "buy" = $20-35
   - Budget "low" + "diy" = $10-25
   - Budget "medium" + "buy" = $40-70
   - Budget "medium" + "diy" = $25-45
   - Budget "high" + "buy" = $70-120
   - Budget "high" + "diy" = $40-70
   - Budget "unlimited" = $100-200+

3. **Time Estimate** based on complexity and user's time:
   - "rushed" = Maximum 2-3 hours (ONLY simple costumes)
   - "moderate" = 3-6 hours
   - "plenty" = 5-15 hours for elaborate costumes

4. **Difficulty**:
   - Easy = Buy complete OR very simple DIY
   - Medium = Some assembly/makeup/crafting required
   - Hard = Advanced skills, multiple complex pieces

5. **Google Images Search Query**: Optimized query to find costume reference photos

6. **Category**: One of: scary, funny, pop-culture, classic, creative, sexy

RESPONSE FORMAT (JSON only):
{
  "enhancements": [
    {
      "name": "${costumes[0]?.name}",
      "description": "Detailed iconic outfit description",
      "cost": "$XX-XX",
      "time": "X-X hours",
      "difficulty": "Easy/Medium/Hard",
      "imageSearch": "optimized search query",
      "category": "category name"
    }
  ]
}`;

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
              name: "enhance_costumes",
              description: "Add detailed information to selected costumes",
              parameters: {
                type: "object",
                properties: {
                  enhancements: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        name: { type: "string" },
                        description: { type: "string" },
                        cost: { type: "string" },
                        time: { type: "string" },
                        difficulty: { type: "string", enum: ["Easy", "Medium", "Hard"] },
                        imageSearch: { type: "string" },
                        category: { type: "string", enum: ["scary", "funny", "pop-culture", "classic", "creative", "sexy"] }
                      },
                      required: ["name", "description", "cost", "time", "difficulty", "imageSearch", "category"],
                      additionalProperties: false
                    }
                  }
                },
                required: ["enhancements"],
                additionalProperties: false
              }
            }
          }
        ],
        tool_choice: { type: "function", function: { name: "enhance_costumes" } }
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
    const enhancementData = JSON.parse(toolCall.function.arguments);

    // Merge enhancements with original costumes
    const enhancedCostumes = costumes.map((costume: any, idx: number) => ({
      ...costume,
      ...enhancementData.enhancements[idx],
      why: costume.aiReasoning // Keep the matching reasoning
    }));

    return new Response(
      JSON.stringify({ costumes: enhancedCostumes }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in enhance-costumes function:', error);
    
    // Fallback: return costumes with basic details
    const { costumes, userProfile } = await req.json();
    const fallbackCostumes = costumes.map((costume: any) => ({
      ...costume,
      description: `Classic ${costume.name} costume from ${costume.source}.`,
      cost: userProfile.budget === 'low' ? '$20-35' : userProfile.budget === 'medium' ? '$40-70' : '$80-120',
      time: userProfile.time === 'rushed' ? '1-2 hours' : userProfile.time === 'moderate' ? '3-5 hours' : '5-10 hours',
      difficulty: 'Medium',
      imageSearch: `${costume.name} ${costume.source} costume`,
      category: 'pop-culture',
      why: costume.aiReasoning || 'Great costume choice!'
    }));

    return new Response(
      JSON.stringify({ costumes: fallbackCostumes }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
