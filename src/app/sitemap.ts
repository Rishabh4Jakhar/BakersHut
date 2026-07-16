import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bakers-hut.example/",
      lastModified: new Date("2026-07-16"),
    },
  ];
}