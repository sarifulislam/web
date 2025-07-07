import React from 'react';
import { Link } from 'react-router-dom';
import services from '../data/portfolio.json';
import servicesData from '../data/services.json';

const Portfolio = () => {
    const mainService = servicesData.services.find(service => service.title === "AI-Powered Crypto Trading");

    return (
        <>
            <div className="my-8 py-8 bg-gray-50" id="portfolio">
                <h2 className="my-4 text-center text-4xl text-blue-900 uppercase font-bold tracking-wide">
                    {mainService ? mainService.title : "AI-Powered Crypto Trading"}
                </h2>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                    {mainService ? mainService.subtitle : "Harness the power of AWS, GCP, and Azure with our AI-driven trading solutions for Binance, designed to maximize profits, minimize risk, and automate your crypto trading journey."}
                </p>
                <div className="flex justify-center">
                    <div className="w-32 border-b-4 border-blue-900 mb-12"></div>
                </div>

                <div className="px-6 max-w-7xl mx-auto" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white transition-all ease-in-out duration-300 overflow-hidden text-gray-700 hover:scale-105 hover:shadow-xl rounded-lg shadow-lg p-4 min-h-max border border-gray-100"
                            >
                                <div className="m-3 text-center">
                                    <h4 className="font-semibold my-4 text-xl md:text-2xl text-blue-900 mb-4 h-14">
                                        {service.title}
                                    </h4>
                                    <p className="text-md font-medium leading-6 text-gray-600 h-auto md:h-56">
                                        {service.description}
                                    </p>
                                    <div className="flex justify-center my-6">
                                        <Link
                                            to={service.link}
                                            className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full max-w-xs px-6 py-3 text-lg font-medium shadow-md rounded-xl transition-colors duration-200"
                                        >
                                            Schedule Demo
                                            <svg
                                                className="w-5 h-5 ml-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
