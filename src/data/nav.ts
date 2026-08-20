export type NavLink = { label: string; to: string; note?: string };

export const navGroups: { group: string; links: NavLink[] }[] = [
  {
    group: "About",
    links: [
      { label: "About MAKAUT", to: "/about-makaut", note: "The institution behind the experience" },
      { label: "About MCA", to: "/about-mca", note: "900+ voices, one cultural community" },
      { label: "Story of TRINETRA", to: "/story", note: "Where the festival comes from" },
    ],
  },
  {
    group: "Experience",
    links: [
      { label: "TRINETRA 2026 Experience", to: "/experience", note: "Twelve worlds across two days" },
      { label: "Event Schedule", to: "/schedule", note: "24–25 September 2026" },
      { label: "Artists & Highlights", to: "/headliners", note: "DJ Koyel, The Morphine India, Pathaks × Dhakis" },
      { label: "Clubs & Talent", to: "/clubs", note: "The culture behind the festival" },
    ],
  },
  {
    group: "Team",
    links: [
      { label: "Leadership", to: "/leadership", note: "Faculty, executive and cultural leadership" },
    ],
  },
  {
    group: "Proof",
    links: [
      { label: "Journey & Achievements", to: "/journey", note: "How we got here" },
      { label: "Gallery / Throwback", to: "/gallery", note: "Real people, real events" },
      { label: "Audience & Reach", to: "/audience", note: "The media kit" },
      { label: "Proof Center", to: "/proof", note: "Claims, sources and documents" },
      { label: "Previous Sponsors", to: "/previous-sponsors", note: "Built through collaboration" },
    ],
  },
  {
    group: "Sponsorship",
    links: [
      { label: "Why Sponsor TRINETRA", to: "/why-sponsor", note: "Your audience is already here" },
      { label: "Sponsorship Packages", to: "/packages", note: "₹3 Lakh to ₹15 Lakh+" },
      { label: "Partnership Categories", to: "/categories", note: "Fifteen category partnerships" },
      { label: "Brand Activation Lab", to: "/activation-lab", note: "See your brand at TRINETRA" },
    ],
  },
];

export const allRoutes: NavLink[] = [
  { label: "Home", to: "/" },
  ...navGroups.flatMap((g) => g.links),
  { label: "Partner With Us", to: "/partner" },
];
