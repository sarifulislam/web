import React from 'react';
import bigDataImg from '../images/bigdata.svg'; 
import aiImg from '../images/ai.svg';
import blockchainImg from '../images/blockchain.svg';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>

                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                        Empowering innovation through cutting-edge technologies.
                    </h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="Big Data Service" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={bigDataImg} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Big Data Services</h2>
                                <p className="text-md font-medium">
                                    We provide advanced Big Data solutions to help businesses process, analyze, and derive meaningful insights from massive datasets. Our services enhance decision-making and drive business growth.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="AI Service" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={aiImg} />
                                <h2 className="font-semibold my-4 text-2xl text-center">AI Solutions</h2>
                                <p className="text-md font-medium">
                                    Transform your business with our AI-powered solutions. From predictive analytics to natural language processing, we deliver AI technologies tailored to your specific needs.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="Blockchain Service" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={blockchainImg} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Blockchain Services</h2>
                                <p className="text-md font-medium">
                                    Leverage our expertise in blockchain to create secure, transparent, and decentralized solutions. We help businesses integrate blockchain for enhanced trust and efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div>
                            <h3 className="text-3xl text-blue-900 font-bold">We <span className='font-black'>Build</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    With extensive expertise in cutting-edge technologies, we deliver innovative solutions tailored to your business needs, ensuring scalability, efficiency, and growth.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                            </div>
                            <h3 className="text-3xl text-blue-900 font-bold">We <span className='font-black'>Collaborate</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    Partner with us to co-create solutions that address your unique challenges. We work closely with your team to achieve your business objectives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
