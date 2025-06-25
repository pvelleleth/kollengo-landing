// src/pages/api/waitlist.ts
import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const { email } = await request.json();

  const res = await fetch("https://hook.us2.make.com/tlswmclkha6f95vtxhpcfriq82wiq9l1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-make-apikey": import.meta.env.MAKE_API_KEY, // Secure!
    },
    body: JSON.stringify({ email }),
  });

  return new Response("OK", { status: res.status });
};