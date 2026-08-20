/**
 * TRINETRA 2026 — single source of truth for the festival lineup.
 *
 * Edit ONLY this file to change artists, artist status, imagery, day themes or
 * the countdown target. The homepage, artists page, schedule, SEO and the
 * TRINETRA AI assistant all read from here.
 */

export type ArtistStatus = "invited" | "confirmed" | "announced";

export type Artist = {
  slug: string;
  day: 1 | 2;
  dayLabel: string;
  date: string;
  name: string;
  category: string;
  headline: string;
  blurb: string;
  genres: string[];
  status: ArtistStatus;
  time: string;
  /** Replace with a project asset (src/assets/...) whenever a licensed photo is available. */
  image?: string;
  imageAlt: string;
  /** Fallback treatment used when no image is present or the image fails to load. */
  tone: "night" | "finale";
  cta: { label: string; to: string };
};

export const statusLabel: Record<ArtistStatus, string> = {
  invited: "Invited artist",
  announced: "Announced",
  confirmed: "Confirmed",
};

export const artists: Artist[] = [
  {
    slug: "dj-koyel",
    day: 1,
    dayLabel: "Day 01",
    date: "24 September 2026",
    name: "DJ Koyel",
    category: "DJ Night",
    headline: "The night the campus moves as one.",
    blurb:
      "A Kolkata-based DJ whose sets move between Bollywood, commercial, hip-hop, house, techno and electronic music — built for a full campus on its feet.",
    genres: ["Bollywood", "Commercial", "Hip-Hop", "House", "Techno", "Electronic"],
    status: "invited",
    time: "07:00 PM",
    imageAlt: "DJ Koyel performing a live DJ set",
    tone: "night",
    cta: { label: "Explore DJ Night", to: "/headliners" },
  },
  {
    slug: "the-morphine-india",
    day: 2,
    dayLabel: "Day 02",
    date: "25 September 2026",
    name: "The Morphine India",
    category: "Live Band Finale",
    headline: "Bengal's rock energy closes the festival.",
    blurb:
      "A Kolkata live band bringing alternative and progressive rock together with Hindi and Bengali fusion covers — the loudest, most emotional moment of TRINETRA.",
    genres: ["BollyRock", "Alternative Rock", "Live Band"],
    status: "invited",
    time: "04:00 PM",
    imageAlt: "The Morphine India performing live on stage",
    tone: "finale",
    cta: { label: "Explore Band Night", to: "/headliners" },
  },
];

export type TechEvent = { name: string; note: string };

export const techArena: TechEvent[] = [
  { name: "Hackathon", note: "Overnight build sprint across student teams." },
  { name: "Robot Wars", note: "Combat robotics in a caged campus arena." },
  { name: "Esports & Gaming", note: "Competitive brackets on the big screen." },
  { name: "Code Relay", note: "Team-relay competitive programming." },
  { name: "Startup Pitch", note: "Student founders pitch to a live panel." },
  { name: "Design Sprint", note: "Product and brand design against the clock." },
  { name: "Tech Quiz", note: "Rapid-fire technology and innovation quiz." },
  { name: "Maker Showcase", note: "Hardware, robotics and prototype exhibits." },
];

export const festivalJourney = [
  {
    step: "01",
    title: "Tech & Innovation",
    day: "Day 01 — 24 September",
    words: ["Build", "Compete", "Create"],
    note: "A full daytime arena of hackathons, robotics, esports and startup pitching.",
    to: "/experience",
  },
  {
    step: "02",
    title: "DJ Koyel Live",
    day: "Day 01 Night — 24 September",
    words: ["Dance", "Celebrate", "Connect"],
    note: "The main stage turns into a club — Bollywood to techno, wall to wall.",
    to: "/headliners",
  },
  {
    step: "03",
    title: "The Morphine India",
    day: "Day 02 — 25 September",
    words: ["Sing", "Feel", "Finish Loud"],
    note: "The live-band finale: Bengal rock, fusion covers and a campus singing back.",
    to: "/headliners",
  },
];

/** Countdown target — first gate opening, IST (UTC+5:30). */
export const eventStart = new Date("2026-09-24T11:00:00+05:30");
export const eventEnd = new Date("2026-09-25T22:00:00+05:30");

export const trinetra2026 = {
  eventName: "TRINETRA 2026",
  tagline: "Bengal's Autumn Festival of Technology, Culture & Live Music",
  subline: "Tradition meets the next generation.",
  dates: "24 — 25 September 2026",
  venue: "MAKAUT, West Bengal — Main Campus, Haringhata",
  organiser: "MAKAUT Cultural Association (MCA)",
  artists,
  techArena,
  festivalJourney,
  eventStart,
  eventEnd,
};
