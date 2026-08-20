import { knowledgeBase, type AssistantAction } from "@/data/trinetraKnowledge";

const ROUTES: { to: string; label: string; keys: string[] }[] = [
  { to: "/headliners", label: "View artists", keys: ["artist", "dj koyel", "morphine", "band", "lineup"] },
  { to: "/schedule", label: "Event schedule", keys: ["schedule", "timing", "day 1", "day 2", "programme"] },
  { to: "/packages", label: "Sponsorship packages", keys: ["sponsor", "package", "title sponsor", "platinum"] },
  { to: "/partner", label: "Talk to team TRINETRA", keys: ["contact", "partner", "meeting", "enquiry", "email"] },
  { to: "/experience", label: "The experience", keys: ["experience", "tech", "hackathon", "robot", "competition"] },
  { to: "/audience", label: "Audience & reach", keys: ["audience", "footfall", "reach", "numbers"] },
  { to: "/about-makaut", label: "About MAKAUT", keys: ["makaut", "venue", "campus", "location", "haringhata"] },
  { to: "/gallery", label: "Gallery", keys: ["gallery", "photo", "previous"] },
];

export function deriveActions(question: string, answer: string): AssistantAction[] {
  const hay = `${question} ${answer}`.toLowerCase();
  const hits = ROUTES.filter((r) => r.keys.some((k) => hay.includes(k)));
  return (hits.length ? hits : ROUTES.slice(0, 3)).slice(0, 3).map(({ label, to }) => ({ label, to }));
}

const SYSTEM = `You are TRINETRA AI, the guide for the TRINETRA 2026 festival website.
Answer ONLY from the knowledge below. If a question is unrelated to TRINETRA, reply exactly:
"I'm here to help with TRINETRA 2026. Ask me about the events, artists, schedule, venue, sponsorships or MCA."
Never invent statistics, artist achievements, ticket prices or dates. Artists are invited, not confirmed.
Be concise: 1-4 short sentences, plain text, no markdown, no lists.

KNOWLEDGE:
${knowledgeBase}`;

export async function askGateway(question: string): Promise<string | null> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) return null;

  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages: [
        { role: "system", content: SYSTEM },
        { role: "user", content: question },
      ],
      max_tokens: 220,
    }),
  });

  if (!res.ok) return null;
  const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  const text = data.choices?.[0]?.message?.content?.trim();
  return text && text.length > 0 ? text : null;
}
