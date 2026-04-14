export default {
  async fetch(request) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    if (url.pathname !== "/proxy/webdav" || request.method !== "POST") {
      return new Response("Not Found", { status: 404, headers: corsHeaders });
    }

    try {
      const payload = await request.json();
      const targetUrl = String(payload.targetUrl || "");
      const method = String(payload.method || "GET").toUpperCase();
      const username = String(payload.username || "");
      const password = String(payload.password || "");
      const body = payload.body ? String(payload.body) : undefined;

      if (!targetUrl) {
        return new Response("Missing targetUrl", { status: 400, headers: corsHeaders });
      }

      const headers = new Headers();
      if (username || password) {
        headers.set("Authorization", `Basic ${btoa(`${username}:${password}`)}`);
      }
      if (body) headers.set("Content-Type", "application/json");

      const upstream = await fetch(targetUrl, { method, headers, body });
      const text = await upstream.text();

      return new Response(text, {
        status: upstream.status,
        headers: {
          ...corsHeaders,
          "Content-Type": upstream.headers.get("Content-Type") || "text/plain; charset=utf-8"
        }
      });
    } catch (err) {
      return new Response(`Proxy Error: ${err.message || "Unknown error"}`, {
        status: 500,
        headers: corsHeaders
      });
    }
  }
};
