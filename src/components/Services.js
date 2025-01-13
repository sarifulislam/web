import React from 'react';
import bigDataImg from '../images/blockchain.svg'; 
import aiImg from '../images/blockchain.svg';
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
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="AWS Data Pipeline Development" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={bigDataImg} />
                                <h2 className="font-semibold my-4 text-2xl text-center">AWS Data Pipeline Development</h2>
                                <p className="text-md font-medium">
                                    Our AWS Data Pipeline Development service provides end-to-end solutions for seamless data ingestion, transformation, and storage. Utilizing AWS services like EMR, Glue, and Kinesis, we design robust, scalable pipelines tailored to your business needs.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="AWS Infrastructure Automation" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={aiImg} />
                                <h2 className="font-semibold my-4 text-2xl text-center">AWS Infrastructure Automation</h2>
                                <p className="text-md font-medium">
                                    Our AWS Infrastructure Automation service helps you build scalable, reliable, and secure infrastructure using Terraform. We integrate essential AWS services such as SQS, SNS, and IAM to automate workflows, optimize resource utilization, and enhance operational efficiency.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="GCP Big Data Processing" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={blockchainImg} />
                                <h2 className="font-semibold my-4 text-2xl text-center">GCP Big Data Processing</h2>
                                <p className="text-md font-medium">
                                    Our GCP Big Data Processing service leverages Google Cloud's Dataproc and Dataflow to deliver powerful analytics capabilities for both real-time and batch data processing.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="GCP Predictive Analytics" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={blockchainImg} />
                                <h2 className="font-semibold my-4 text-2xl text-center">GCP Predictive Analytics</h2>
                                <p className="text-md font-medium">
                                    Our GCP Predictive Analytics service harnesses Google Cloud's AI/ML capabilities to deliver insightful, data-driven predictions.
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
