/**
 * Curated knowledge for the TRINETRA AI assistant.
 * Level 1 (deterministic) answers come from `intents` below.
 * Level 2 (LLM) uses `knowledgeBase` as grounding context — no invented facts.
 */

import { artists, bandFinale, djNight, techArena, trinetra2026 } from "./event";
import { festival, metrics, packages } from "./site";

export type AssistantAction = { label: string; to: string };

export type AssistantReply = { text: string; actions: AssistantAction[] };

export type Intent = {
  id: string;
  keywords: string[];
  reply: () => AssistantReply;
};

const lineupLine = artists
  .map((a) => `${a.dayLabel} — ${a.name} (${a.category}, ${a.time})`)
  .join("\n");

export const suggestedQuestions = [
  "What's happening at TRINETRA?",
  "Show me the artists",
  "What happens on Day 1?",
  "Sponsorship details",
  "How can my brand partner with TRINETRA?",
  "Where is MAKAUT?",
  "Show the event schedule",
  "How do I contact the team?",
];

export const intents: Intent[] = [
  {
    id: "artist_information",
    keywords: ["artist", "lineup", "line up", "singer", "band", "dj", "koyel", "morphine", "perform", "music", "concert"],
    reply: () => ({
      text: `${lineupLine}\n\nBoth are featured invited artists for TRINETRA 2026.`,
      actions: [
        { label: "View artists", to: "/headliners" },
        { label: "Full schedule", to: "/schedule" },
      ],
    }),
  },
  {
    id: "technology_events",
    keywords: ["day 1", "day one", "tech", "hackathon", "robot", "esports", "gaming", "coding", "startup", "innovation", "competition", "contest"],
    reply: () => ({
      text: `Day 1 is the technology and innovation arena: ${techArena
        .slice(0, 5)
        .map((t) => t.name)
        .join(", ")} and more — followed by ${djNight.name} on the main stage at night.`,
      actions: [
        { label: "The experience", to: "/experience" },
        { label: "Full schedule", to: "/schedule" },
      ],
    }),
  },
  {
    id: "schedule",
    keywords: ["schedule", "timing", "time", "programme", "program", "when", "date", "day 2", "day two"],
    reply: () => ({
      text: `TRINETRA 2026 runs ${trinetra2026.dates} at ${trinetra2026.venue}. Day 1 is technology, competitions and the DJ night; Day 2 is culture, the Influencers' Summit and the live-band finale.`,
      actions: [
        { label: "Event schedule", to: "/schedule" },
        { label: "Festival journey", to: "/experience" },
      ],
    }),
  },
  {
    id: "sponsorship",
    keywords: ["sponsor", "sponsorship", "brand", "partner", "partnership", "package", "price", "cost", "deck", "brochure", "activation", "roi"],
    reply: () => ({
      text: `Four partnership levels: ${packages
        .map((p) => `${p.tier} (${p.price})`)
        .join(", ")}. Every level includes campus visibility, digital amplification and on-ground activation.`,
      actions: [
        { label: "Sponsorship packages", to: "/packages" },
        { label: "Partner with us", to: "/partner" },
        { label: "Why sponsor", to: "/why-sponsor" },
      ],
    }),
  },
  {
    id: "venue",
    keywords: ["where", "venue", "location", "map", "campus", "haringhata", "address", "reach", "makaut"],
    reply: () => ({
      text: `TRINETRA 2026 takes place at ${festival.venue}.`,
      actions: [
        { label: "About MAKAUT", to: "/about-makaut" },
        { label: "Event schedule", to: "/schedule" },
      ],
    }),
  },
  {
    id: "contact",
    keywords: ["contact", "email", "phone", "call", "reach out", "team", "who", "leadership", "meeting"],
    reply: () => ({
      text: "You can reach the TRINETRA Corporate Relations team through the partnership form, or see the leadership team directly.",
      actions: [
        { label: "Talk to team TRINETRA", to: "/partner" },
        { label: "Leadership", to: "/leadership" },
      ],
    }),
  },
  {
    id: "audience",
    keywords: ["audience", "footfall", "reach", "numbers", "attendance", "stats", "students", "followers", "impressions"],
    reply: () => ({
      text: `Key figures: ${metrics
        .slice(0, 3)
        .map((m) => `${m.value} ${m.label.toLowerCase()} (${m.status.toLowerCase()})`)
        .join("; ")}. Every number is labelled with its source in the Proof Center.`,
      actions: [
        { label: "Audience & reach", to: "/audience" },
        { label: "Proof center", to: "/proof" },
      ],
    }),
  },
  {
    id: "mca",
    keywords: ["mca", "cultural association", "organiser", "organizer", "club", "who runs", "association"],
    reply: () => ({
      text: "TRINETRA is organised by the MAKAUT Cultural Association (MCA) — a student-led platform for cultural expression, creativity and events across the university.",
      actions: [
        { label: "About MCA", to: "/about-mca" },
        { label: "Clubs & talent", to: "/clubs" },
      ],
    }),
  },
  {
    id: "event_details",
    keywords: ["what is", "trinetra", "about", "festival", "happening", "overview", "sharod"],
    reply: () => ({
      text: `${trinetra2026.eventName} is ${trinetra2026.tagline.toLowerCase()} — ${trinetra2026.dates} at MAKAUT, West Bengal. Technology and competitions by day, live music and Bengali cultural celebration by night.`,
      actions: [
        { label: "The experience", to: "/experience" },
        { label: "Story of TRINETRA", to: "/story" },
      ],
    }),
  },
  {
    id: "gallery",
    keywords: ["gallery", "photo", "picture", "image", "past", "previous", "throwback"],
    reply: () => ({
      text: "Photographs from previous MCA events are in the gallery — stage moments, live music, cultural performances and campus activity.",
      actions: [
        { label: "Gallery", to: "/gallery" },
        { label: "Journey & achievements", to: "/journey" },
      ],
    }),
  },
];

export const fallbackReply: AssistantReply = {
  text: "I'm here to help with TRINETRA 2026. Ask me about the events, artists, schedule, venue, sponsorships or MCA.",
  actions: [
    { label: "The experience", to: "/experience" },
    { label: "Artists", to: "/headliners" },
    { label: "Sponsorship", to: "/packages" },
  ],
};

/** Deterministic keyword/intent match. Returns null when nothing scores. */
export function matchIntent(input: string): AssistantReply | null {
  const q = input.toLowerCase();
  let best: { score: number; intent: Intent } | null = null;
  for (const intent of intents) {
    const score = intent.keywords.reduce((acc, k) => (q.includes(k) ? acc + k.length : acc), 0);
    if (score > 0 && (!best || score > best.score)) best = { score, intent };
  }
  return best ? best.intent.reply() : null;
}

/** Grounding context handed to the LLM. Never add unverified facts here. */
export const knowledgeBase = `
EVENT: ${trinetra2026.eventName} — ${trinetra2026.tagline}
DATES: ${trinetra2026.dates}
VENUE: ${trinetra2026.venue}
ORGANISER: ${trinetra2026.organiser}, a student-led cultural platform at MAKAUT.

DAY 1 (24 September): Technology & innovation arena — ${techArena.map((t) => t.name).join(", ")} — plus inter-college contests and the MCA clubs show. Night: ${djNight.name} (${djNight.category}), genres ${djNight.genres.join("/")}. Status: invited artist.
DAY 2 (25 September): Bengali cultural programming, Pathaks x Dhakis, Influencers' Summit, and the live-band finale ${bandFinale.name} (${bandFinale.category}), genres ${bandFinale.genres.join("/")}. Status: invited artist.

AUDIENCE FIGURES (each with its own status label, do not overstate):
${metrics.map((m) => `- ${m.value} ${m.label} [${m.status}]`).join("\n")}

SPONSORSHIP LEVELS:
${packages.map((p) => `- ${p.tier} (${p.tagline}) — ${p.price}`).join("\n")}

PAGES: / (home), /experience, /schedule, /headliners (artists), /clubs, /packages, /categories, /why-sponsor, /activation-lab, /partner (enquiry form), /audience, /proof, /gallery, /journey, /leadership, /about-makaut, /about-mca, /story, /previous-sponsors.
`.trim();
