import React from 'react';
import NavBar from '../components/Navbar/NavBar';

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
                        {/* Alternative: Cyan-300 */}
                        {/* className="... text-cyan-300" */}
                        {/* Alternative: Gradient */}
                        {/* className="... bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-300" */}
                        Power Your Crypto Trading with AI Automation
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium mb-8 text-gray-200 max-w-3xl mx-auto">
                        Unleash consistent profits with our AI-driven trading solutions, powered by AWS, GCP, and Azure, seamlessly integrated with Binance.
                    </p>
                </div>

                {/* Feature Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
                    <div
                        className="bg-white bg-opacity-90 backdrop-blur-md text-gray-800 p-6 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-blue-200 border-opacity-30"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="800"
                    >
                        <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">
                            AI-Powered Trading Bots
                        </h2>
                        <p className="text-sm md:text-base text-gray-700">
                            Harness AWS Lambda, GCP AI Platform, and Azure ML to deploy high-precision trading bots for arbitrage, scalping, and trend trading on Binance.
                        </p>
                    </div>
                    <div
                        className="bg-white bg-opacity-90 backdrop-blur-md text-gray-800 p-6 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-blue-200 border-opacity-30"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="800"
                    >
                        <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">
                            Smart Portfolio Management
                        </h2>
                        <p className="text-sm md:text-base text-gray-700">
                            Optimize your crypto portfolio with real-time rebalancing using GCP BigQuery, Azure Functions, and AWS DynamoDB for maximum returns.
                        </p>
                    </div>
                    <div
                        className="bg-white bg-opacity-90 backdrop-blur-md text-gray-800 p-6 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-blue-200 border-opacity-30"
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="800"
                    >
                        <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">
                            Custom Trading Algorithms
                        </h2>
                        <p className="text-sm md:text-base text-gray-700">
                            Build tailored algorithms with AWS SageMaker and Binance data, backtested for reliability and optimized for profitability.
                        </p>
                    </div>
                    <div
                        className="bg-white bg-opacity-90 backdrop-blur-md text-gray-800 p-6 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-blue-200 border-opacity-30"
                        data-aos="fade-up"
                        data-aos-delay="800"
                        data-aos-duration="800"
                    >
                        <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">
                            Why Choose Us?
                        </h2>
                        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1">
                            <li>AI-driven trading expertise</li>
                            <li>Multi-cloud scalability</li>
                            <li>Secure Binance integration</li>
                            <li>24/7 market monitoring</li>
                        </ul>
                    </div>
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