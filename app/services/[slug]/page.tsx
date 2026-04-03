import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  getServiceBySlug,
  getAllServiceSlugs,
} from '../../components/ServiceData/ServiceData';
import '../services.css';

interface Props {
  params: Promise<{ slug: string }>;
}

// ---------------------------------------------------------------------------
// Pre-render every service page at build time.
// Without this, [slug] routes are server-rendered on demand — slower for users
// and worse for crawl budget. Now each page is a static HTML file at build.
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://bjbil.se/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} – Bo & Jimmy Bilservice AB`,
      description: service.metaDescription,
      url: `https://bjbil.se/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const isVatgasRengoring = service.slug === 'vatgas-rengoring';

  const paragraphs = service.description
    .split('\n\n')
    .map((p: string) => p.trim())
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="svc-hero" aria-labelledby="svc-heading">
        <div className="svc-hero-inner">
          <nav className="svc-breadcrumb" aria-label="Brödsmulor">
            <Link href="/services">Tjänster</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{service.title}</span>
          </nav>
          <h1 id="svc-heading">{service.title}</h1>
          <p className="svc-hero-question">{service.heroQuestion}</p>
        </div>
      </section>

      {/* Content */}
      <section className="svc-content-section">
        <div className="svc-content-inner">

          {/* Mobile-only image (top, hidden on desktop via CSS).
              No `priority` here — both images share the same src, so only one
              <link rel="preload"> should be injected. The desktop image below
              gets priority since it's the above-the-fold version on most visits.
              The mobile image loads normally; it's hidden on desktop anyway so
              the browser won't fetch it there regardless. */}
          <div
            className={`svc-img-wrapper svc-img-mobile ${
              isVatgasRengoring ? 'svc-img-vatgas-mobile' : ''
            }`}
          >
            <Image
              src={service.imageSrc}
              alt={service.imageAlt}
              fill
              sizes="100vw"
              className="svc-img"
              quality={90}
            />
          </div>

          {/* Text */}
          <div className="svc-text">
            {paragraphs.map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Desktop-only image (right column, hidden on mobile via CSS).
              `priority` lives here — this is the LCP image on desktop. */}
          <div
            className={`svc-img-wrapper svc-img-desktop ${
              isVatgasRengoring ? 'svc-img-vatgas-desktop' : ''
            }`}
          >
            <Image
              src={service.imageSrc}
              alt={service.imageAlt}
              fill
              sizes="45vw"
              className="svc-img"
              quality={90}
              priority
            />
          </div>

        </div>

        {/* CTA */}
        <div className="svc-cta">
          <Link href="/booking" className="svc-btn-primary">
            Boka {service.title}
          </Link>
          <Link href="/services" className="svc-btn-secondary">
            ← Alla tjänster
          </Link>
        </div>
      </section>
    </>
  );
}