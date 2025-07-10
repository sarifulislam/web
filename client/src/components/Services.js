import React from 'react';
import servicesData from '../data/services.json';
import blockchainImg from '../images/algo-trading.svg'; // Kept single image as per original code

const Services = () => {
    // Combine the two main services into one object to avoid duplicate display
const mainServicesTitles = ["Crypto Trading Automation", "Data Engineering and Data Science Solutions"];
const mainServices = servicesData.services.filter(service => mainServicesTitles.includes(service.title));
    const otherServices = servicesData.services.filter(service => !mainServicesTitles.includes(service.title));

    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    {mainServices.map((service, index) => (
                        <div key={index} className="mb-8">
                            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
                                {service.title}
                            </h2>
                            <div className='flex justify-center'>
                                <div className='w-24 border-b-4 border-blue-900'></div>
                            </div>
                            <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                                {service.subtitle}
                            </h2>
                        </div>
                    ))}
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        {otherServices.map((service, index) => (
                            <div key={index} className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img
                                        alt={service.title}
                                        className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                        src={blockchainImg}
                                    />
                                    <h2 className="font-semibold my-4 text-2xl text-center">
                                        {service.title}
                                    </h2>
                                    <p className="text-md font-medium whitespace-pre-line">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
