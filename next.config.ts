import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/about', destination: '/foretag.html', permanent: true },
      { source: '/contact', destination: '/kontakt.html', permanent: true },
      { source: '/car-makes', destination: '/car-make-selection.html', permanent: true },
      { source: '/tire-hotel', destination: '/dack-hotell.html', permanent: true },
      { source: '/nostalgi', destination: '/nostalgi-page.html', permanent: true },
      { source: '/services', destination: '/tjanster.html', permanent: true },
      { source: '/services/service-underhall', destination: '/tjanster-service.html', permanent: true },
      { source: '/services/fordonsdiagnos', destination: '/tjanster-motorlampa.html', permanent: true },
      { source: '/services/mjukvara', destination: '/tjanster-mjukvara.html', permanent: true },
      { source: '/services/elbilsverkstad', destination: '/tjanster-elbilsverkstad.html', permanent: true },
      { source: '/services/ac-service', destination: '/tjanster-ac-service.html', permanent: true },
      { source: '/services/hjulinstallning-dack', destination: '/tjanster-missljud.html', permanent: true },
      { source: '/services/vatgas-rengoring', destination: '/tjanster-hydrive.html', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/om_oss.html', destination: '/foretag.html', permanent: true },
      { source: '/dack.html', destination: '/tjanster-missljud.html', permanent: true },
    ];
  },
  images: {
    qualities: [75, 80, 85, 90],
  },
};

export default nextConfig;