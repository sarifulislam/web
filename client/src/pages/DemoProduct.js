import React from 'react';
import Contact from './Contact'; // Import the Contact component
import { Helmet } from 'react-helmet-async';

function DemoProduct() {
    return (
      <>
        <Helmet>
          <title>Demo Product - ChatWhole</title>
          <meta name="description" content="Explore the demo product offered by ChatWhole, showcasing our data engineering and data science capabilities." />
          <link rel="canonical" href="https://yourdomain.com/get-demo" />
          <meta property="og:title" content="Demo Product - ChatWhole" />
          <meta property="og:description" content="Explore the demo product offered by ChatWhole, showcasing our data engineering and data science capabilities." />
          <meta property="og:url" content="https://yourdomain.com/get-demo" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Demo Product - ChatWhole" />
          <meta name="twitter:description" content="Explore the demo product offered by ChatWhole, showcasing our data engineering and data science capabilities." />
        </Helmet>
        <Contact /> {/* Render the Contact component directly */}
      </>
    );
}

export default DemoProduct;
