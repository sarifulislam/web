import React from 'react';
import NavBar from '../components/Navbar/NavBar';

const Hero = () => {
    return (
        <>
            {/* Hero Section with NavBar */}
            <div className="hero bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-8" id="hero">
                <div>
                    <NavBar />
                </div>
                <div className="container mx-auto text-center" data-aos="fade-up">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Innovating the Future of Big Data and Analytics
                    </h1>
                    <p className="text-lg md:text-xl font-medium mb-6">
                        Transforming businesses with cutting-edge cloud solutions and 24/7 operational excellence.
                    </p>
                </div>

                {/* Feature Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="200">
                        <h2 className="text-xl md:text-2xl font-bold mb-2">AWS & GCP Expertise</h2>
                        <p className="text-sm md:text-lg">
                            Leverage the power of Amazon Web Services and Google Cloud Platform to build scalable, secure, and efficient big data solutions tailored to your needs.
                        </p>
                    </div>
                    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="400">
                        <h2 className="text-xl md:text-2xl font-bold mb-2">Comprehensive Solutions</h2>
                        <p className="text-sm md:text-lg">
                            From data pipelines to actionable insights, we manage your data lifecycle with expertise in PySpark, Hadoop, and Kafka.
                        </p>
                    </div>
                    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="600">
                        <h2 className="text-xl md:text-2xl font-bold mb-2">24/7 Support</h2>
                        <p className="text-sm md:text-lg">
                            Uninterrupted operations with our round-the-clock team. Your data never sleeps, and neither do we.
                        </p>
                    </div>
                    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="800">
                        <h2 className="text-xl md:text-2xl font-bold mb-2">Why Choose Us?</h2>
                        <ul className="list-disc list-inside text-sm md:text-lg">
                            <li>Expertise in advanced big data tools</li>
                            <li>Tailored, scalable solutions</li>
                            <li>Seamless integration with your systems</li>
                            <li>Uncompromising quality</li>
                        </ul>
                    </div>
                </div>

                {/* Call-to-Action Button */}
                <div className="mt-12 text-center">
                    <button
                        className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </>
    );
};

export default Hero;
