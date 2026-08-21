/**
 * Central SEO configuration for the TRINETRA 2026 site.
 * Canonical host is the www custom domain — keep every absolute URL consistent with it.
 */
export const SITE_URL = "https://www.mcamsv.com";
export const SITE_NAME = "TRINETRA 2026 — MAKAUT Autumn Fest";
export const SITE_TWITTER_CARD = "summary_large_image";

/** Absolute URL of the default social preview image (1200×630). */
export const SOCIAL_IMAGE = `${SITE_URL}/social-preview.jpg`;

/** Google Search Console HTML tag verification token. Paste the token value here once available. */
export const GOOGLE_SITE_VERIFICATION = "";

export const ORGANIZATION = {
  name: "MAKAUT Cultural Association",
  alternateName: "MCA",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  parentOrganization: "Maulana Abul Kalam Azad University of Technology, West Bengal",
  address: {
    locality: "Haringhata",
    region: "West Bengal",
    country: "IN",
  },
};

export const canonical = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;
