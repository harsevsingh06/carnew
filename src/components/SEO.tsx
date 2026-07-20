import { Helmet } from 'react-helmet-async';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  image?: string;
  children?: ReactNode;
}

export function SEO({
  title,
  description,
  canonicalUrl,
  image = 'https://carnew-eight.vercel.app/og-image.jpg',
  children,
}: SEOProps) {
  const location = useLocation();

  // Correct Vercel domain
  const defaultCanonical = `https://carnew-eight.vercel.app${location.pathname}`;
  const canonical = canonicalUrl || defaultCanonical;

  const fullTitle = title.includes('CarQube')
    ? title
    : `${title} | CarQube`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Luxury Cars, Supercars, SUVs, Electric Cars, Sports Cars, Car Reviews, Premium Cars"
      />
      <meta name="author" content="CarQube" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="CarQube" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {children}
    </Helmet>
  );
}