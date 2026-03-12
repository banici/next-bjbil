import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://bjbil.se', lastModified: new Date() },
    { url: 'https://bjbil.se/tire-hotel', lastModified: new Date() },
    { url: 'https://bjbil.se/contact', lastModified: new Date() },
    { url: 'https://bjbil.se/about', lastModified: new Date() },
    { url: 'https://bjbil.se/services', lastModified: new Date() },
    { url: 'https://bjbil.se/car-makes', lastModified: new Date() },
    { url: 'https://bjbil.se/booking', lastModified: new Date() },
    { url: 'https://bjbil.se/nostalgi', lastModified: new Date() },
  ];
}