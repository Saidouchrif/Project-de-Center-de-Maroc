import React from 'react';
import { Helmet } from 'react-helmet';

const StructuredData = ({ type = 'organization', data = {} }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "مركز الفرصة الثانية",
          "alternateName": "Centre de la Deuxième Chance",
          "description": "مركز تعليمي خاص في المغرب يقدم برامج تعليمية حديثة ومهنية في النجارة والعلوم والرياضيات",
          "url": "https://votre-domaine.com",
          "logo": "https://votre-domaine.com/images/logo.jpg",
          "image": "https://votre-domaine.com/images/5.jpg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "الدار البيضاء",
            "addressRegion": "الدار البيضاء",
            "addressCountry": "MA",
            "postalCode": "20250"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+212529590183",
            "email": "ibnhanbal49@gmail.com",
            "contactType": "customer service",
            "availableLanguage": ["Arabic", "French"]
          },
          "openingHours": "Mo-Th 08:30-12:30",
          "curriculum": ["نجارة", "علوم", "رياضيات", "تعليم مهني"],
          "educationalLevel": "ابتدائي",
          "foundingDate": "2020",
          "numberOfStudents": "50-100",
          "sameAs": [
            "https://www.google.com/maps/place/مدرسة+إبتدائية+إين+حنبل"
          ]
        };
      
      case 'school':
        return {
          "@context": "https://schema.org",
          "@type": "School",
          "name": "مركز الفرصة الثانية",
          "description": "مدرسة ابتدائية خاصة تقدم تعليم عالي الجودة مع برامج مهنية",
          "url": "https://votre-domaine.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "الدار البيضاء",
            "addressCountry": "MA"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "البرامج التعليمية",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "برنامج النجارة",
                  "description": "تعلم مهارات النجارة الأساسية والعمل مع الأخشاب"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "برنامج العلوم",
                  "description": "دراسة المفاهيم العلمية الأساسية والتفاعلات الكيميائية"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Course",
                  "name": "برنامج الرياضيات",
                  "description": "دراسة الرياضيات المتقدمة والنظريات الهندسية"
                }
              }
            ]
          }
        };
      
      case 'person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": data.name || "عبدالله اشح",
          "jobTitle": data.jobTitle || "مدير",
          "worksFor": {
            "@type": "Organization",
            "name": "مركز الفرصة الثانية"
          },
          "description": data.description || "مدير مركز الفرصة الثانية يشرف على جميع الأنشطة الإدارية والأكاديمية"
        };
      
      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
