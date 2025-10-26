import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ProductRequest {
  costumeName: string;
  budget: string;
  approach: string;
}

interface Product {
  name: string;
  price: string;
  where: string;
  url?: string;
  image?: string;
}

// Budget string to max price mapping
const BUDGET_MAX_PRICE = {
  "Under $30": 30,
  "<$30": 30,
  "$30-$75": 75,
  "$30-60": 60,
  "$75-$150": 150,
  "$60-100": 100,
  "$150+": 250,
  "$100+": 250,
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { costumeName, budget, approach }: ProductRequest = await req.json();

    const RAPIDAPI_KEY = Deno.env.get("RAPIDAPI_KEY");

    // Get max price for budget
    const maxPrice = BUDGET_MAX_PRICE[budget as keyof typeof BUDGET_MAX_PRICE] || 100;

    // Build search query
    const searchQuery = `${costumeName} halloween costume adult`;

    console.log(`Fetching products for: ${searchQuery}, budget: ${budget}, max: $${maxPrice}`);

    // If no API key, return null to use AI fallback
    if (!RAPIDAPI_KEY) {
      console.log("No RAPIDAPI_KEY found, will use AI fallback");
      return new Response(
        JSON.stringify({ products: null, usedAPI: false }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    try {
      // Call RapidAPI Real-Time Product Search
      const response = await fetch(
        `https://real-time-product-search.p.rapidapi.com/search?q=${encodeURIComponent(searchQuery)}&country=us&language=en&limit=7&sort_by=BEST_MATCH`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": RAPIDAPI_KEY,
            "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        console.error(`RapidAPI error: ${response.status}`);
        return new Response(
          JSON.stringify({ products: null, usedAPI: false, error: `API returned ${response.status}` }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const data = await response.json();

      // Parse products from API response
      const products: Product[] = [];

      if (data.data && Array.isArray(data.data)) {
        for (const item of data.data) {
          // Skip if over budget
          if (item.product_price && parseFloat(item.product_price.replace(/[^0-9.]/g, '')) > maxPrice) {
            continue;
          }

          // Extract store name from product link
          let storeName = "Online Store";
          if (item.product_link) {
            const urlMatch = item.product_link.match(/https?:\/\/(?:www\.)?([^\/]+)/);
            if (urlMatch) {
              storeName = urlMatch[1]
                .replace(/\.com|\.net|\.org/, '')
                .replace(/amazon/, 'Amazon')
                .replace(/walmart/, 'Walmart')
                .replace(/ebay/, 'eBay')
                .replace(/etsy/, 'Etsy');
            }
          }

          products.push({
            name: item.product_title || item.product_name || "Costume Item",
            price: item.product_price || item.offer_price || "$0",
            where: storeName,
            url: item.product_link || item.product_url,
            image: item.product_photo || item.product_photos?.[0],
          });

          // Limit to 7 products
          if (products.length >= 7) break;
        }
      }

      console.log(`Found ${products.length} products within budget`);

      return new Response(
        JSON.stringify({ products: products.length > 0 ? products : null, usedAPI: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );

    } catch (apiError) {
      console.error("RapidAPI request failed:", apiError);
      return new Response(
        JSON.stringify({ products: null, usedAPI: false, error: String(apiError) }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

  } catch (error) {
    console.error("Error in fetch-products function:", error);
    return new Response(
      JSON.stringify({
        products: null,
        usedAPI: false,
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
