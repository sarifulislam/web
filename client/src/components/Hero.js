import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import heroData from '../data/hero.json';

const Hero = () => {
    return (
        <>
            {/* Hero Section with NavBar */}
            <div
                className="hero bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6 md:px-12"
                id="hero"
            >
                <div className="relative z-10">
                    <NavBar />
                </div>
                <div
                    className="container mx-auto text-center mt-12"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg text-yellow-400">
                        {heroData.mainTitle}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium mb-8 text-gray-200 max-w-3xl mx-auto whitespace-pre-line">
                        {heroData.subtitle}
                    </p>
                </div>

                {/* Feature Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
                    {heroData.features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white bg-opacity-90 backdrop-blur-md text-gray-800 p-6 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-blue-200 border-opacity-30"
                            data-aos="fade-up"
                            data-aos-delay={200 + index * 200}
                            data-aos-duration="800"
                        >
                            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">
                                {feature.title}
                            </h2>
                            {feature.title === "Why Choose Us?" ? (
                                <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1 whitespace-pre-line">
                                    {feature.description.split('\n').map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm md:text-base text-gray-700 whitespace-pre-line">
                                    {feature.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Call-to-Action Button */}
                <div className="mt-16 text-center">
                    <a
                        href="#services"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
                    >
                        Explore Our Solutions
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Hero;
