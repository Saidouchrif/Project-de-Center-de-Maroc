import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  lang = 'ar'
}) => {
  const siteName = 'مركز الفرصة الثانية';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = 'مركز تعليمي خاص في المغرب يقدم برامج تعليمية حديثة ومهنية في النجارة والعلوم والرياضيات';
  const defaultKeywords = 'مركز الفرصة الثانية, مدرسة مغربية, تعليم خاص, برامج تعليمية, نجارة, علوم, رياضيات, تعليم مهني, الدار البيضاء, المغرب';
  const defaultImage = '/images/logo.jpg';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="language" content={lang} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || window.location.href} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ar_MA" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />
      <meta name="geo.region" content="MA" />
      <meta name="geo.placename" content="الدار البيضاء, المغرب" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url || window.location.href} />
    </Helmet>
  );
};

export default SEO;
