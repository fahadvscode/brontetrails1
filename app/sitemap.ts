import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

function siteOrigin() {
  return SITE_URL.replace(/\/$/, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin();

  return [
    {
      url: `${origin}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
