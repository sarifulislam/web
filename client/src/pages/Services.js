import React from 'react';
import Seo from '../components/Seo';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <>
      <Seo
        title="Services - ChatWhole"
        description="Explore ChatWhole's expert data engineering service and solutions to help your business leverage data for growth and innovation."
        url="https://chatwhole.com/services"
      />
      <Services />
    </>
  );
};

export default ServicesPage;
