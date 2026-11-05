import { SERVICES } from './components/ServiceData/ServiceData';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...SERVICES.map((service) => ({ url: `https://bjbil.se${service.path}`, lastModified: new Date() })),
    { url: 'https://bjbil.se', lastModified: new Date() },
    { url: 'https://bjbil.se/dack-hotell.html', lastModified: new Date() },
    { url: 'https://bjbil.se/kontakt.html', lastModified: new Date() },
    { url: 'https://bjbil.se/foretag.html', lastModified: new Date() },
    { url: 'https://bjbil.se/tjanster.html', lastModified: new Date() },
    { url: 'https://bjbil.se/car-make-selection.html', lastModified: new Date() },
    { url: 'https://bjbil.se/booking', lastModified: new Date() },
    { url: 'https://bjbil.se/nostalgi-page.html', lastModified: new Date() },
  ];
}