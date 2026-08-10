import p1 from "@/assets/proof/proof-1.jpg.asset.json";
import p2 from "@/assets/proof/proof-2.jpg.asset.json";
import p3 from "@/assets/proof/proof-3.jpg.asset.json";
import p4 from "@/assets/proof/proof-4.jpg.asset.json";
import p5 from "@/assets/proof/proof-5.jpg.asset.json";
import p6 from "@/assets/proof/proof-6.jpg.asset.json";
import p7 from "@/assets/proof/proof-7.jpg.asset.json";
import p8 from "@/assets/proof/proof-8.jpg.asset.json";
import p9 from "@/assets/proof/proof-9.jpg.asset.json";

export type ProofPhoto = {
  image: string;
  event: string;
  year: string;
  category: string;
  caption: string;
};

export const proofPhotos: ProofPhoto[] = [
  {
    image: p1.url,
    event: "Main stage, alpona LED backdrop",
    year: "Past edition",
    category: "Main stage",
    caption: "Full production rig, LED wall and a packed ground at the headline set.",
  },
  {
    image: p2.url,
    event: "Live band under the beam show",
    year: "Past edition",
    category: "Production",
    caption: "Truss-mounted lighting, haze and floral stage dressing on the night.",
  },
  {
    image: p3.url,
    event: "Folk-rock headline performance",
    year: "Past edition",
    category: "Headliner",
    caption: "Bengali folk-rock act performing to the MAKAUT crowd.",
  },
  {
    image: p4.url,
    event: "Front-of-stage crowd",
    year: "Past edition",
    category: "Audience",
    caption: "Barricade-front students during the headline act.",
  },
  {
    image: p5.url,
    event: "Crowd energy",
    year: "Past edition",
    category: "Audience",
    caption: "Hands up through the night — real attendees, real footfall.",
  },
  {
    image: p6.url,
    event: "Guitarist in the spotlight",
    year: "Past edition",
    category: "Performance",
    caption: "Concert-grade sound and lighting for every live act.",
  },
  {
    image: p7.url,
    event: "Violin and vocals",
    year: "Past edition",
    category: "Performance",
    caption: "Fusion set on the main stage.",
  },
  {
    image: p8.url,
    event: "Frontman on the mic",
    year: "Past edition",
    category: "Stage",
    caption: "Full band production, monitors and backline handled in-house.",
  },
  {
    image: p9.url,
    event: "Hand-painted festival banners",
    year: "Past edition",
    category: "Campus",
    caption: "Student-made Bengali calligraphy banners produced on campus.",
  },
];
