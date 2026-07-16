import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bakers-hut.example/',
      lastModified: new Date(),
    },
  ];
}
