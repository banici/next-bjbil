import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://bjbil.se', lastModified: new Date() },
    { url: 'https://bjbil.se/tire-hotel', lastModified: new Date() },
    { url: 'https://bjbil.se/contact', lastModified: new Date() },
    { url: 'https://bjbil.se/om-oss', lastModified: new Date() },
    { url: 'https://bjbil.se/tjanster', lastModified: new Date() },
    { url: 'https://bjbil.se/bilmarken', lastModified: new Date() },
  ];
}