import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface GuideRequest {
  costume: {
    name: string;
    description: string;
  };
  approach: string;
  budget: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { costume, approach, budget }: GuideRequest = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // ✅ NEW: Fetch real products from shopping API in parallel with AI guide generation
    const fetchProductsPromise = fetch(
      `${Deno.env.get('SUPABASE_URL')}/functions/v1/fetch-products`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': req.headers.get('Authorization') || '',
        },
        body: JSON.stringify({
          costumeName: costume.name,
          budget: budget,
          approach: approach
        })
      }
    ).then(res => res.json()).catch(err => {
      console.error('Failed to fetch products:', err);
      return { products: null, usedAPI: false };
    });

    const systemPrompt = `You are a Halloween costume implementation expert. Generate detailed guides for creating specific character costumes.

Respond ONLY with valid JSON in this exact format:
{
  "buyPath": {
    "items": [
      {
        "name": "Specific item name",
        "price": "$XX",
        "where": "Store name (Amazon, Spirit Halloween, Party City, etc.)"
      }
    ],
    "totalCost": "$XX",
    "tips": ["Tip 1", "Tip 2"]
  },
  "diyPath": {
    "materials": ["Material 1", "Material 2"],
    "steps": ["Step 1", "Step 2"],
    "tools": ["Tool 1", "Tool 2"],
    "totalCost": "$XX",
    "tips": ["Tip 1", "Tip 2"]
  }
}`;

    const userPrompt = `Character: ${costume.name}
Description: ${costume.description}
User's Approach: ${approach}
User's Budget: ${budget}

Generate a comprehensive implementation guide with both buy and DIY paths. For the buy path, list 5-7 specific items needed with prices and where to buy them. For the DIY path, provide materials list, 6-8 step-by-step instructions, tools needed, and cost estimates. Include character-specific tips for both paths.`;

    const aiPromise = fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
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

    // ✅ Wait for both API calls in parallel
    const [response, productsData] = await Promise.all([aiPromise, fetchProductsPromise]);

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

    // ✅ NEW: Replace AI-generated items with real products if available
    if (productsData?.products && productsData.products.length > 0) {
      console.log(`Using ${productsData.products.length} real products from shopping API`);

      // Calculate total cost from real products
      const totalCost = productsData.products.reduce((sum: number, item: any) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
        return sum + price;
      }, 0);

      // Replace buy path items with real products
      parsed.buyPath.items = productsData.products;
      parsed.buyPath.totalCost = `$${totalCost.toFixed(2)}`;

      // Add a note that these are real products
      parsed.buyPath.realProducts = true;

      console.log(`Total cost from real products: $${totalCost.toFixed(2)}`);
    } else {
      console.log('Using AI-generated product suggestions (no real products found)');
      parsed.buyPath.realProducts = false;
    }

    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in generate-guide:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
