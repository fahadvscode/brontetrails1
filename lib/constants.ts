export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://brontetrailsoakville.com";

const SUPABASE_STORAGE =
  "https://cfzuypbljirmibmxpabi.supabase.co/storage/v1/object/public/rental-documents";

export const IMAGES = {
  aerial: `${SUPABASE_STORAGE}/1780959448519_0_BRONT-Aerial-FINAL-web.jpg`,
  sitePlan: `${SUPABASE_STORAGE}/1780959448520_1_Caivan-BronteNorth-Illustration-SteveScott-Desktop-1920x1080-12-04-2025.jpg`,
  logo: `${SUPABASE_STORAGE}/1780959448521_2_Caivan-BronteTrailsSouthOakville-Logo-RGB-OrleansBlue.png`,
  detachedExterior: `${SUPABASE_STORAGE}/1780959448521_3_detached_exterior.jpeg`,
  detachedPicture2: `${SUPABASE_STORAGE}/1780959448521_4_detached_picture_2.jpg`,
  exteriorCommunity: `${SUPABASE_STORAGE}/1780959448522_5_exterior_community.jpeg`,
} as const;

export const BRAND = {
  primary: "#3e7f93",
  primaryDark: "#2d5f6b",
  primaryMid: "#357d8f",
  white: "#ffffff",
} as const;

export const PROJECT = {
  name: "Bronte Trails",
  tag: "Bronte Trails Oakville",
  source: "brontetrailsoakville.com",
  location: "Bronte Road & Upper Middle Road West, Oakville, Ontario",
} as const;
