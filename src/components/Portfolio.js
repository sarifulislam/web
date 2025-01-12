import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const services = [
        {
            title: "AWS Data Pipeline Development",
            description:
                "Our AWS Data Pipeline Development service provides end-to-end solutions for seamless data ingestion, transformation, and storage. Utilizing AWS services like EMR, Glue, and Kinesis, we design robust, scalable pipelines tailored to your business needs. EMR efficiently processes large-scale datasets, Glue enables automated data cataloging and transformations, and Kinesis ensures real-time data streaming for instant processing and analysis. These solutions are optimized for reliability, security, and cost-efficiency, supporting both batch and real-time workflows. Empower your organization with streamlined data flows, enhanced analytics capabilities, and actionable insights for smarter, faster decision-making and overall business success.",
            link: "/contact",
        },
        {
            title: "AWS Infrastructure Automation",
            description:
                "Our AWS Infrastructure Automation service helps you build scalable, reliable, and secure infrastructure using Terraform. We integrate essential AWS services such as SQS, SNS, and IAM to automate workflows, optimize resource utilization, and enhance operational efficiency. Terraform ensures infrastructure as code (IaC), enabling consistent deployments and simplified management. With automation at the core, our solutions reduce manual intervention, improve scalability, and ensure compliance with best practices. By leveraging these robust tools, we create resilient architectures that adapt to your business needs, driving efficiency, reducing costs, and enhancing overall system performance in a secure cloud environment.",
            link: "/contact",
        },
        {
            title: "GCP Big Data Processing",
            description:
                "Our GCP Big Data Processing service leverages Google Cloud's Dataproc and Dataflow to deliver powerful analytics capabilities for both real-time and batch data processing. Dataproc provides efficient, scalable cluster management for Apache Spark and Hadoop, while Dataflow enables seamless data transformations and analysis. These solutions are designed to handle complex datasets, optimize performance, and support scalable workflows. Whether you need real-time streaming insights or batch processing for large datasets, our expertise ensures reliable, cost-effective solutions. Empower your business with robust analytics, enabling smarter decisions, enhanced operational efficiency, and the ability to derive actionable insights from your data.",
            link: "/contact",
        },
        {
            title: "GCP Predictive Analytics",
            description:
                "Our GCP Predictive Analytics service harnesses Google Cloud's AI/ML capabilities to deliver insightful, data-driven predictions. Leveraging tools like BigQuery ML and TensorFlow, we create predictive models that uncover trends and patterns. By integrating Pub/Sub, we enable real-time, event-driven architectures for responsive insights. These solutions empower businesses to anticipate customer needs, optimize operations, and stay ahead of market trends. Our approach ensures scalability, reliability, and accuracy, providing actionable insights tailored to your business goals. Unlock the potential of predictive analytics with GCP, transforming your data into a strategic asset for growth and innovation.",
            link: "/contact",
        },
    ];

    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Services</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        {services.map((service, index) => (
                            <div key={index} className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                                <div className="m-2 text-justify text-sm">
                                    <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{service.title}</h4>
                                    <p className="text-md font-medium leading-5 h-auto md:h-48">{service.description}</p>
                                    <div className="flex justify-center my-4">
                                        <Link to={service.link} className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                            Schedule Demo
                                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;
