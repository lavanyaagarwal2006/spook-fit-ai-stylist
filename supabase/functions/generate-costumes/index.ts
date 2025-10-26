import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CostumeRequest {
  answers: {
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

    const systemPrompt = `You are a creative Halloween costume expert. Generate 5 SPECIFIC CHARACTER-BASED costume recommendations. These should be actual, recognizable characters from movies, TV shows, video games, anime, history, etc.

CRITICAL INSTRUCTIONS:
- Suggest SPECIFIC characters with clear names (e.g., "Spider-Man (2002 Tobey Maguire)" not just "superhero")
- AVOID awkward phrasing like "Beetlejuice from Beetlejuice" - instead say "Beetlejuice" or "Beetlejuice (1988 Film)"
- Pay close attention to their SPECIFIC interests - if they mention Marvel, suggest Marvel characters; if they say hip-hop, suggest hip-hop artists
- Use their general hobbies to inspire creative connections (e.g., if they like football, suggest sports movie characters)
- For each character, describe their MOST ICONIC or EASIEST recognizable outfit
- Include a detailed visual description of the outfit so users can visualize it
- Include a specific Google Images search query that will help users find reference photos
- DO NOT repeat any characters from the previously suggested list
- Match characters to their style preferences (scary = horror, funny = comedic, etc.)
- Consider what's trending in 2025
- For couples/groups, suggest coordinating character pairs from the same franchise

Respond ONLY with valid JSON in this exact format:
{
  "costumes": [
    {
      "name": "Character Name (Source)",
      "description": "Detailed outfit description with colors and key visual elements",
      "imageSearch": "exact Google Images search query for reference photos",
      "why": "Why this character matches their specific interests",
      "difficulty": "Easy/Medium/Hard",
      "cost": "$XX-XX",
      "time": "X-X hours",
      "category": "scary/funny/pop-culture/classic/creative/sexy"
    }
  ]
}`;

    const userPrompt = `User Profile:
- Style preferences: ${(answers.style || []).join(", ")}
- Budget: ${answers.budget}
- Approach: ${answers.approach}
- Time available: ${answers.time}
- Group type: ${answers.group}
- Broad interests: ${(answers.interests || []).join(", ")}
- Specific interests: ${answers.specific_interests || "None provided"}
- General hobbies: ${answers.general_interests || "None provided"}
- Past experience: ${answers.past || "None provided"}
- Previously suggested: ${previousSuggestions.join(", ") || "None"}

Generate 5 perfect costume recommendations for this user.`;

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
