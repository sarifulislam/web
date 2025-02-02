import React from 'react';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Portfolio />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;