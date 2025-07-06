import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Chatbot from '../components/Chatbot';

const LocalBusinessStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ChatWhole",
        "image": "",
    "telephone": "+91-1234567890",
    "email": "info@chatwhole.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kolaghat",
      "addressLocality": "Purba Medinipur",
      "addressRegion": "West Bengal",
      "postalCode": "721151",
      "addressCountry": "IN"
    },
    "url": "https://chatwhole.com",
    "sameAs": [
      "https://www.facebook.com/chatwhole",
      "https://twitter.com/chatwhole",
      "https://www.linkedin.com/company/chatwholes"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
  );
};

const Home = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ChatWhole",
        "url": "https://chatwhole.com",
        "logo": "",
        "sameAs": [
            "https://www.facebook.com/chatwhole/",
            "https://www.linkedin.com/company/chatwhole"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 9800435692",
            "contactType": "Customer Service",
            "email": "appchatwhole@gmail.com"
        }
    };

    const websiteData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://chatwhole.com/",
        "name": "ChatWhole",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://chatwhole.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
            <Helmet>
                <title>ChatWhole - Data Engineering and Data Science Solutions</title>
                <meta name="description" content="ChatWhole offers expert data engineering and data science services to help your business leverage data for growth and innovation." />
                <link rel="canonical" href="https://chatwhole.com/" />
                <meta property="og:title" content="ChatWhole - Data Engineering and Data Science Solutions" />
                <meta property="og:description" content="ChatWhole offers expert data engineering and data science services to help your business leverage data for growth and innovation." />
                <meta property="og:url" content="https://chatwhole.com/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="ChatWhole - Data Engineering and Data Science Solutions" />
                <meta name="twitter:description" content="ChatWhole offers expert data engineering and data science services to help your business leverage data for growth and innovation." />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(websiteData)}
                </script>
            </Helmet>
            <LocalBusinessStructuredData />
            <Hero />
            <Services />
            <Portfolio />
            <Cta/>
            <Chatbot />
            <Footer />
        </>
    )
}

export default Home;
