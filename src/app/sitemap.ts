import { tools } from "@/lib/tools";
import { MetadataRoute } from "next";

const BASE = "https://ai-tools-woad-six.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = tools.map((t) => ({
    url: `${BASE}/tools/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...toolPages,
  ];
}
