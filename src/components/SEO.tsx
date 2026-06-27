import { Helmet } from 'react-helmet-async';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  children?: ReactNode;
}

export function SEO({ title, description, canonicalUrl, children }: SEOProps) {
  const location = useLocation();
  const defaultCanonical = `https://carqubeb.netlify.app${location.pathname}`;
  const canonical = canonicalUrl || defaultCanonical;

  return (
    <Helmet>
      <title>{title.includes('CarQube') ? title : `${title} | CarQube`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {children}
    </Helmet>
  );
}
