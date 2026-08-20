/**
 * TRINETRA 2026 — centralised, CMS-ready content.
 * Edit this file to update the whole website. No copy lives in components.
 */

export const festival = {
  name: "TRINETRA",
  year: "2026",
  descriptor: "MAKAUT Autumn Fest",
  organiser: "MAKAUT Cultural Association (MCA)",
  department: "CRED — Corporate Relations and Events Department",
  institution: "Maulana Abul Kalam Azad University of Technology, West Bengal",
  dates: "24–25 September 2026",
  venue: "MAKAUT, WB — Main Campus, Haringhata, Nadia",
  positioning: "Where Bengal's Culture Meets the Next Generation.",
  sponsorLine:
    "Two Days. Thousands of Experiences. Millions of Digital Impressions. One Opportunity for Your Brand.",
  intro:
    "TRINETRA is MAKAUT's immersive Autumn Fest — bringing music, performance, creativity, culture, youth and brand experiences together across two unforgettable days.",
};

export type MetricStatus =
  | "Projected"
  | "Documented"
  | "Analytics available"
  | "Historical"
  | "To be verified";

export type Metric = {
  value: string;
  label: string;
  status: MetricStatus;
  source: string;
};

export const metrics: Metric[] = [
  {
    value: "5,000+",
    label: "Estimated event footfall",
    status: "Projected",
    source: "Projection by the organising team for TRINETRA 2026.",
  },
  {
    value: "2M+",
    label: "Average monthly views",
    status: "Analytics available",
    source: "Value stated in the TRINETRA sponsorship brochure.",
  },
  {
    value: "35K+",
    label: "Total followers on socials",
    status: "Analytics available",
    source: "Value stated in the TRINETRA sponsorship brochure.",
  },
  {
    value: "12+",
    label: "Affiliated influencers in campus",
    status: "To be verified",
    source: "Value stated in the TRINETRA sponsorship brochure.",
  },
  {
    value: "900+",
    label: "Active MCA members",
    status: "Documented",
    source: "Value stated in the MCA documentation.",
  },
  {
    value: "200+",
    label: "MAKAUT affiliated colleges",
    status: "Documented",
    source: "Institutional figure stated in the supplied brochure.",
  },
  {
    value: "1.5 Lakh+",
    label: "Students across the MAKAUT ecosystem",
    status: "Documented",
    source: "Institutional figure stated in the supplied brochure.",
  },
];

export const brandEnvironment = [
  { title: "Live Entertainment", note: "Two full days of stage programming across music, dance and culture." },
  { title: "Gen-Z Audience", note: "A concentrated, engaged student audience in Bengal's festive season." },
  { title: "Cultural Celebration", note: "Durga Puja energy translated into a contemporary campus festival." },
  { title: "Influencer Engagement", note: "Creator-led conversation through the Influencers' Summit." },
  { title: "Product Activation", note: "Stalls, sampling zones and product showcase areas inside campus." },
  { title: "Campus Visibility", note: "Gates, hoardings, standees and stage surfaces across the venue." },
  { title: "Digital Amplification", note: "Pre-event, live and post-event content across MCA channels." },
  { title: "Direct Consumer Interaction", note: "Face-to-face brand moments with a young audience." },
];

export type ScheduleItem = {
  code: string;
  title: string;
  time: string;
  description: string;
  sponsorAngle: string;
};

export const schedule: { day: string; date: string; items: ScheduleItem[] }[] = [
  {
    day: "Day 01",
    date: "24 September 2026",
    items: [
      {
        code: "BODHAN",
        title: "Inauguration",
        time: "11:00 AM",
        description:
          "The ceremonial opening of TRINETRA 2026 with the university leadership, faculty and invited guests.",
        sponsorAngle: "Title partner mention, stage backdrop branding and chief-guest association.",
      },
      {
        code: "AVISHKAR",
        title: "Technology & Innovation Arena",
        time: "11:30 AM",
        description:
          "Hackathon, robotics arena, project expo, startup pitch and the coding challenge — the engineering heart of MAKAUT on display.",
        sponsorAngle: "Tech partner naming rights, hiring desk, prize pool branding and product demos.",
      },
      {
        code: "SAMMILAN",
        title: "Inter-College Contests",
        time: "12:00 PM",
        description:
          "Competitive showcases bringing participants from colleges across the MAKAUT ecosystem.",
        sponsorAngle: "Prize partner integration, trophy and certificate branding, contest naming.",
      },
      {
        code: "RANANEETI",
        title: "Gaming & E-Sports Arena",
        time: "02:00 PM",
        description: "Live tournaments, big-screen finals and a crowd that stays for every round.",
        sponsorAngle: "Arena title branding, streamed overlay placement and device sampling.",
      },
      {
        code: "SPANDAN",
        title: "MCA Clubs Show",
        time: "03:00 PM",
        description: "Drama, art, music, dance, fashion, quiz and photography clubs take the stage.",
        sponsorAngle: "Club-segment presenting rights and youth-facing product sampling.",
      },
      {
        code: "AKALBODHAN",
        title: "DJ Night — DJ Koyel",
        time: "07:00 PM",
        description:
          "Bollywood, commercial, hip-hop, house and techno from a Kolkata-based DJ, with the full campus on its feet.",
        sponsorAngle: "Immersive LED takeover, beverage partner activation and peak-attendance mention.",
      },
    ],
  },
  {
    day: "Day 02",
    date: "25 September 2026",
    items: [
      {
        code: "GARJAN",
        title: "Pathaks × Dhakis",
        time: "11:00 AM",
        description:
          "A Maharashtrian Dhol-Tasha Pathak meets a traditional Bengali Dhaki crew in a high-energy jugalbandi.",
        sponsorAngle: "High-recall cultural moment for content capture and LED advertisement.",
      },
      {
        code: "AVAHAN",
        title: "Influencers' Summit",
        time: "12:00 PM",
        description:
          "Digital personalities, campus culture and Bengali adda — conversations, stories, trends and humour.",
        sponsorAngle: "Creator campaigns, branded conversation segments and social content rights.",
      },
      {
        code: "BICHARAN",
        title: "Cultural Evening & Fashion Ramp",
        time: "03:00 PM",
        description:
          "Bengali cultural programming, a student-led editorial runway and the clubs' finale showcase.",
        sponsorAngle: "Ramp presenting rights, apparel integration and premium seating hospitality.",
      },
      {
        code: "DARSHAN",
        title: "The Morphine India — Live",
        time: "06:00 PM",
        description:
          "The live-band finale of TRINETRA 2026 on the main stage, closing two days of culture and code.",
        sponsorAngle: "Ticket branding, pamphlet distribution, VIP passes and product launch sequence.",
      },
      {
        code: "AKALBODHAN",
        title: "DJ Night",
        time: "07:00 PM",
        description: "The closing celebration — lights, sound and the full campus on its feet.",
        sponsorAngle: "Immersive LED takeover, beverage partner activation and closing brand mention.",
      },
    ],
  },
];

export const experienceCategories = [
  { name: "Music", normal: "Live bands, campus artists and a closing DJ night.", sponsor: "Stage sponsorship, LED advertisement, artist association." },
  { name: "Dance", normal: "Club showcases and a headline troupe performance.", sponsor: "Segment presenting rights and choreography-led branded content." },
  { name: "Culture", normal: "Dhaak, pathak, alpona and Durga Puja iconography.", sponsor: "Cultural-moment association with high emotional recall." },
  { name: "Fashion", normal: "A student-led editorial runway segment.", sponsor: "Style and apparel partner integration on the ramp." },
  { name: "Art", normal: "Live art walls, installations and campus decor.", sponsor: "Branded installation and co-created mural activation." },
  { name: "Influencers", normal: "A summit of regional creators and campus voices.", sponsor: "Creator campaigns, branded conversation, social amplification." },
  { name: "Competitions", normal: "Inter-college contests across disciplines.", sponsor: "Prize partner, trophy branding, contest naming rights." },
  { name: "Clubs", normal: "Seven creative clubs under one association.", sponsor: "Youth engagement and contest integration at club level." },
  { name: "DJ Night", normal: "The two-day finale on the main stage.", sponsor: "Peak-attendance visibility and immersive LED takeover." },
  { name: "Brand Activations", normal: "Experience zones built into the festival map.", sponsor: "Custom-built activation footprint designed with your team." },
  { name: "Food", normal: "Campus food court and beverage zones.", sponsor: "Beverage partner stalls, sampling and coupon programmes." },
  { name: "Community", normal: "900+ members running the festival together.", sponsor: "Employer branding and long-term campus relationships." },
];

export type Package = {
  tier: string;
  tagline: string;
  price: string;
  highlight?: boolean;
  benefits: string[];
};

export const packages: Package[] = [
  {
    tier: "Title Sponsor",
    tagline: "Presented by",
    price: "₹15 Lakh+",
    highlight: true,
    benefits: [
      "Constant advertisement on exclusive Digital Standee LED",
      "Main Stage LCD video access — approximately 5 minutes for advertisement or speech",
      "Product launch sequence of approximately 5 minutes before the Fossils Show",
      "Sponsor gates and hoardings supplied by sponsor throughout campus",
      "Social media outreach across MCA channels",
      "Active marketing before the event as Title Partner of TRINETRA 2026",
      "Product showcase area inside campus",
      "Stalls",
      "Logo on certificates, wristbands, ID cards, trophies and promotional elements",
      "Chief Guest invitation with bouncers as described in the brochure",
      "50 free VIP passes",
      "5 DIAMOND seated passes for the Fossils Show",
      "Food and beverage coupons as described in the brochure",
      "5 Fossils autographed T-shirts",
      "Exclusive promotional selfie zone",
      "Online live-feed access across both days, except the Fossils Show",
      "Advertisement pamphlet distribution among the Fossils Show audience",
      "Logo on official TRINETRA merchandise",
      "Logo on tickets of the Fossils Show",
      "Gratitude mention in all events of TRINETRA 2026",
    ],
  },
  {
    tier: "Platinum Sponsor",
    tagline: "Powered by",
    price: "₹10 Lakh+",
    benefits: [
      "Constant advertisement on Digital Standee LED",
      "Main Stage LCD access — approximately 3 minutes for advertisement or speech",
      "Sponsor gates and hoardings supplied by sponsor throughout campus",
      "Social media outreach",
      "Product showcase area",
      "Stalls",
      "Logo on certificate, wristband, ID cards, trophies and promotional elements",
      "Chief Guest invitation",
      "20 free VIP passes for the Fossils Show",
      "Food and beverage coupons as described in the brochure",
      "3 Fossils autographed T-shirts",
      "Exclusive promotional selfie zone",
    ],
  },
  {
    tier: "Gold Sponsor",
    tagline: "Co-powered by",
    price: "₹5 Lakh+",
    benefits: [
      "Constant advertisement on Digital Standee LED",
      "Main Stage LCD advertisement access — approximately 1 minute",
      "Sponsor gates and hoardings provided by sponsor throughout campus",
      "Social media outreach",
      "Product showcase area",
      "Stalls",
      "Logo on certificate, handband, trophies and promotional elements",
      "Chief Guest invitation",
      "10 free VIP passes for the Fossils Show",
      "Food and beverage coupons for selected stalls as described in the brochure",
    ],
  },
  {
    tier: "Silver Sponsor",
    tagline: "In association with",
    price: "₹3 Lakh+",
    benefits: [
      "Constant advertisement on Digital Standee LED",
      "Sponsor gates and hoardings provided by sponsor",
      "Social media outreach",
      "Product showcase area",
      "Stalls",
      "Logo on certificates, trophies and selected promotional elements",
      "Chief Guest invitation",
      "5 VIP passes for the Fossils Show",
    ],
  },
];

export const comparisonRows: { row: string; tiers: Record<string, boolean> }[] = [
  { row: "Naming Rights", tiers: { Title: true, Platinum: false, Gold: false, Silver: false } },
  { row: "Digital Standee LED", tiers: { Title: true, Platinum: true, Gold: true, Silver: true } },
  { row: "Main Stage LCD", tiers: { Title: true, Platinum: true, Gold: true, Silver: false } },
  { row: "Stage Speech", tiers: { Title: true, Platinum: true, Gold: false, Silver: false } },
  { row: "Product Launch Sequence", tiers: { Title: true, Platinum: false, Gold: false, Silver: false } },
  { row: "Campus Hoardings", tiers: { Title: true, Platinum: true, Gold: true, Silver: true } },
  { row: "Sponsor Gates", tiers: { Title: true, Platinum: true, Gold: true, Silver: true } },
  { row: "Stalls", tiers: { Title: true, Platinum: true, Gold: true, Silver: true } },
  { row: "Product Showcase", tiers: { Title: true, Platinum: true, Gold: true, Silver: true } },
  { row: "Social Outreach", tiers: { Title: true, Platinum: true, Gold: true, Silver: true } },
  { row: "Certificates", tiers: { Title: true, Platinum: true, Gold: true, Silver: true } },
  { row: "Wristbands", tiers: { Title: true, Platinum: true, Gold: true, Silver: false } },
  { row: "ID Cards", tiers: { Title: true, Platinum: true, Gold: false, Silver: false } },
  { row: "Trophies", tiers: { Title: true, Platinum: true, Gold: true, Silver: true } },
  { row: "Merchandise", tiers: { Title: true, Platinum: false, Gold: false, Silver: false } },
  { row: "Show Tickets", tiers: { Title: true, Platinum: false, Gold: false, Silver: false } },
  { row: "VIP Passes", tiers: { Title: true, Platinum: true, Gold: true, Silver: true } },
  { row: "Selfie Zone", tiers: { Title: true, Platinum: true, Gold: false, Silver: false } },
  { row: "Autographed Merchandise", tiers: { Title: true, Platinum: true, Gold: false, Silver: false } },
  { row: "Live Feed Access", tiers: { Title: true, Platinum: false, Gold: false, Silver: false } },
  { row: "Pamphlet Distribution", tiers: { Title: true, Platinum: false, Gold: false, Silver: false } },
  { row: "Event Mentions", tiers: { Title: true, Platinum: true, Gold: true, Silver: true } },
];

export const tierKeys = ["Title", "Platinum", "Gold", "Silver"];

export const partnershipCategories = [
  { name: "Telecom Partner", deliverable: "One stall + banners provided by partner in campus." },
  { name: "Beverage Partner", deliverable: "One stall + banners provided by partner in campus." },
  { name: "Event Partner", deliverable: "One stall + banners provided by partner in campus." },
  { name: "Online Partner", deliverable: "Banners provided by partner throughout campus." },
  { name: "Gift Partner", deliverable: "Banners provided by partner throughout campus." },
  { name: "Style Partner", deliverable: "One stall + banners provided by partner in campus." },
  { name: "Prize Partner", deliverable: "One stall + banners provided by partner in campus." },
  { name: "Logistics Partner", deliverable: "Banners provided by partner throughout campus." },
  { name: "Media Partner", deliverable: "One stall + banners provided by partner in campus." },
  { name: "Accessory Partner", deliverable: "Banners provided by partner throughout campus." },
  { name: "Decorations Partner", deliverable: "Banners provided by partner throughout campus." },
  { name: "Health Partner", deliverable: "One stall + banners provided by partner in campus." },
  { name: "Beauty Partner", deliverable: "One stall + banners provided by partner in campus." },
  { name: "Apparel Partner", deliverable: "One stall + banners provided by partner in campus." },
  { name: "Ticketing Partner", deliverable: "Banners provided by partner throughout campus." },
];

export const categoryDisclaimer =
  "Expected support and collaboration may vary according to partnership category and deliverables. Detailed terms, branding rights, promotional activities, financial involvement and other conditions will be mutually discussed and finalised. The organising team may customise partnership benefits and expectations based on sponsor requirements and contribution.";

export const activations = [
  { name: "Main Stage LED", best: ["Mass visibility", "Brand recall", "Video advertisements"], tier: "Title / Platinum / Gold" },
  { name: "Entrance Gate", best: ["First impression", "Photo backdrop", "Footfall capture"], tier: "Title / Platinum" },
  { name: "Digital Standee", best: ["Repeated exposure", "Motion creative"], tier: "All paid tiers" },
  { name: "Product Stall", best: ["Sampling", "Product trials", "Lead collection"], tier: "Silver and above" },
  { name: "Selfie Zone", best: ["UGC", "Photography", "Organic social sharing"], tier: "Title / Platinum" },
  { name: "Wristband", best: ["All-day wearable branding"], tier: "Title / Platinum" },
  { name: "ID Card", best: ["Organiser-side visibility"], tier: "Title / Platinum" },
  { name: "Certificate", best: ["Post-event recall", "Participant archive"], tier: "All tiers" },
  { name: "Trophy Backdrop", best: ["Winning-moment photography"], tier: "Silver and above" },
  { name: "Event Ticket", best: ["Purchase-moment branding"], tier: "Title" },
  { name: "Merchandise", best: ["Long-life brand carrier"], tier: "Title" },
  { name: "Instagram Post", best: ["Digital reach", "Announcement moments"], tier: "All tiers" },
  { name: "Creator Reel Cover", best: ["Youth reach", "Creator-led storytelling"], tier: "Gold and above" },
  { name: "Campus Hoarding", best: ["Campus penetration", "Route visibility"], tier: "All tiers" },
  { name: "Product-Launch Screen", best: ["Launch moment", "Peak attendance"], tier: "Title" },
];

export const objectives = [
  { name: "Brand Awareness", recommends: ["Main Stage LED", "Campus Hoarding", "Digital Standee"] },
  { name: "Product Launch", recommends: ["Product-Launch Screen", "Main Stage LED", "Product Stall"] },
  { name: "Sampling", recommends: ["Product Stall", "Selfie Zone", "Entrance Gate"] },
  { name: "Lead Generation", recommends: ["Product Stall", "Instagram Post", "Certificate"] },
  { name: "Campus Penetration", recommends: ["Campus Hoarding", "Wristband", "ID Card"] },
  { name: "Creator Marketing", recommends: ["Creator Reel Cover", "Instagram Post", "Selfie Zone"] },
  { name: "Sales", recommends: ["Product Stall", "Event Ticket", "Merchandise"] },
  { name: "Employer Branding", recommends: ["Certificate", "Trophy Backdrop", "Entrance Gate"] },
  { name: "Engagement", recommends: ["Selfie Zone", "Creator Reel Cover", "Product Stall"] },
];

export type Contact = {
  role: string;
  name: string;
  email?: string;
  phone?: string;
  /** Set to false to hide the direct number on the public site. */
  showPhone?: boolean;
};

export const contacts: Contact[] = [
  { role: "Faculty Coordinator", name: "Prof. Purbali Sengupta", email: "purbali4042@gmail.com", showPhone: false },
  { role: "Executive Head", name: "Mr. Sampad Roy", email: "sampadroy27@gmail.com", phone: "9907580760", showPhone: true },
  { role: "Executive Co-Head", name: "Ms. Sananda Choudhary", email: "sanandachoudhury675@gmail.com", phone: "8250581123", showPhone: true },
  { role: "Deputy Executive Head", name: "Mr. Arpan S Choudhary", phone: "8159976001", showPhone: true },
  { role: "Technology & R&D Head", name: "Mr. Swarup Mondal", email: "swarupmondal385@gmail.com", phone: "8617553986", showPhone: true },
  { role: "Operations Head", name: "Mr. Agnibhu Bijali", email: "agnibhu.bijali.business@gmail.com", phone: "6289206366", showPhone: true },
  { role: "Sponsorship Head", name: "Mr. Suparno Samanta", email: "samantasuparno2005@gmail.com", phone: "9832561909", showPhone: true },
];

export const credMembers = [
  "Suparna Samanta",
  "Sreerup Chatterjee",
  "Koustav Hazra",
  "Agnibhu Bijali",
  "Souradipta Chatterjee",
  "Arpan Singha Chowdhury",
  "Gourab Biswas",
  "Anuksha Sarkar",
  "Karrar Syed Hussain",
  "Sweta Mondal",
  "Satavisha Chandra",
  "Subhojit Naskar",
  "Shuva Debnath",
  "Soumyadeep Mukherjee",
];

export type Club = {
  name: string;
  line: string;
  people: { name: string; role: string; score?: string }[];
};

export const clubs: Club[] = [
  {
    name: "Drama Club",
    line: "Stagecraft, storytelling and the theatre of the festival.",
    people: [{ name: "Baijanti Dalal", role: "Selected member", score: "61/70" }],
  },
  {
    name: "Art Club",
    line: "Alpona, installations and the visual language of TRINETRA.",
    people: [
      { name: "Suhani Roy", role: "Selected member", score: "45/50" },
      { name: "Sayantan Acharya", role: "Selected member", score: "41/50" },
    ],
  },
  {
    name: "Music Club",
    line: "Campus voices, instruments and the sound of the fest.",
    people: [
      { name: "Syed Karrar Hussain", role: "Selected member", score: "9/10" },
      { name: "Anuja Pramanik", role: "Selected member", score: "8/10" },
    ],
  },
  {
    name: "Quiz Club",
    line: "Inter-college quizzing and knowledge contests.",
    people: [{ name: "Mr. Koustav Hazra", role: "Lead" }],
  },
  {
    name: "Fashion Club",
    line: "Editorial runway, styling and campus fashion culture.",
    people: [
      { name: "Ms. Satavisha Chandra", role: "Lead" },
      { name: "Ms. Shirsha Ganguly", role: "Lead" },
    ],
  },
  {
    name: "Dance Club",
    line: "Choreography, crews and the highest-energy segments.",
    people: [
      { name: "Rajdeep Biswas", role: "President" },
      { name: "Debapriya Banerjee", role: "President" },
      { name: "Aritri Podder", role: "Mentor" },
    ],
  },
  {
    name: "Photography Club",
    line: "The archive — every proof photograph starts here.",
    people: [{ name: "Mr. Surath Saha", role: "Lead" }],
  },
];

export const facultyMessage = {
  body: [
    "TRINETRA is presented with pride as a celebration inspired by the culture, spirit and grandeur of Durga Puja.",
    "It is envisioned as more than a fest: a meeting point of tradition, creativity, music, youth energy and shared experiences.",
    "The objective is to create an environment that connects with Bengal's festive emotions while engaging young audiences. Cultural showcases, performances and immersive experiences are intended to make TRINETRA a landmark celebration.",
    "Partners are invited to help shape the experience while gaining meaningful engagement with a dynamic audience.",
  ],
  author: "Prof. Purbali Sengupta",
  role: "Faculty Coordinator, TEAM TRINETRA",
};

export const whySponsor = [
  {
    no: "01",
    title: "Gen-Z & Youth Access",
    body: "Reach an engaged youth audience during Bengal's festive season, with a projected event footfall of 5,000+ across two days.",
  },
  {
    no: "02",
    title: "Multi-Touchpoint Visibility",
    body: "Stage branding, digital creatives, standees, merchandise, event promotions, entrance branding and LED placements.",
  },
  {
    no: "03",
    title: "Cultural Relevance",
    body: "Connect brand communication with the emotional and cultural significance of the Durga Puja season in Bengal.",
  },
  {
    no: "04",
    title: "Online + Offline Amplification",
    body: "Pre-event promotions, artist promotions, social campaigns, on-ground visibility and creator participation.",
  },
  {
    no: "05",
    title: "Direct Customer Interaction",
    body: "Stalls, activations, product displays, sampling and experiential marketing inside a captive campus environment.",
  },
  {
    no: "06",
    title: "Brand Association",
    body: "Associate with culture, youth talent, entertainment, community and creativity — credibly and institutionally.",
  },
  {
    no: "07",
    title: "Post-Event Recall",
    body: "Visual content and social amplification can extend the association well beyond the physical event days.",
  },
];

export const funnel = [
  "Online awareness",
  "Social engagement",
  "Event discovery",
  "Physical attendance",
  "Brand interaction",
  "Post-event recall",
];

export const makautTimeline = [
  { year: "1998", text: "The foundation process for the university began." },
  { year: "15 Jan 2001", text: "The university officially started functioning under the WBUT Act, 2001." },
  { year: "2015", text: "Renamed in honour of Maulana Abul Kalam Azad, India's first Education Minister." },
  { year: "21 Feb 2025", text: "MAKAUT Cultural Association (MCA) was established." },
  { year: "2026", text: "TRINETRA — MCA's flagship pre-Durga Puja cultural fest." },
];

export const disciplines = [
  "Engineering",
  "Technology",
  "Management",
  "Pharmacy",
  "Architecture",
  "Applied Sciences",
];

export const mediaKit = [
  { title: "TRINETRA 2026 Sponsorship Brochure", status: "Available on request" },
  { title: "Official CRED Document", status: "Available on request" },
  { title: "TRINETRA Logo Pack", status: "Awaiting upload" },
  { title: "Event Poster", status: "Awaiting upload" },
  { title: "Event Schedule (PDF)", status: "Awaiting upload" },
  { title: "Brand Guidelines", status: "Awaiting upload" },
  { title: "Partnership Deck", status: "Awaiting upload" },
];

export const sponsorHooks = [
  "Your brand. Their experience.",
  "Be seen where culture comes alive.",
  "Two days. One campus. Thousands of experiences.",
  "Not a logo on a banner — a place in the memory.",
];
