import React from 'react';
import Contact from './Contact'; // Import the Contact component
import Seo from '../components/Seo';

function DemoProduct() {
  const title = "Demo Product - ChatWhole";
  const description = "Explore the demo product offered by ChatWhole, showcasing our data engineering and data science capabilities.";
  const url = "https://chatwhole.com/get-demo";

  return (
    <>
      <Seo
        title={title}
        description={description}
        url={url}
      />
      <Contact /> {/* Render the Contact component directly */}
    </>
  );
}

export default DemoProduct;
