import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const services = [
        {
            title: "AI-Driven Binance Trading Automation",
            description:
                "Revolutionize your crypto trading with our AI-driven automation solutions, powered by AWS, GCP, and Azure, seamlessly integrated with Binance’s robust APIs. Our custom-built trading bots leverage advanced machine learning models, trained on historical and real-time Binance market data, to execute high-precision strategies such as arbitrage, scalping, and momentum trading. AWS Lambda ensures ultra-low-latency trade execution, GCP’s AI Platform powers predictive analytics, and Azure Machine Learning optimizes strategy performance. Designed for scalability and security, our bots operate 24/7, adapting to volatile markets to maximize profits while minimizing risk. Whether you’re a retail trader or an enterprise, our solutions deliver consistent returns, reduce manual effort, and provide a competitive edge in the fast-paced crypto landscape.",
            link: "/contact",
        },
        {
            title: "Intelligent Portfolio Optimization",
            description:
                "Take control of your crypto investments with our intelligent portfolio optimization services, built on the combined power of AWS, GCP, and Azure, and integrated with Binance APIs for real-time market insights. Using GCP BigQuery for advanced data analytics, Azure Functions for dynamic portfolio rebalancing, and AWS DynamoDB for secure, high-speed data storage, our AI-driven system continuously monitors market trends and adjusts asset allocations to align with your financial goals. Predictive models forecast market shifts, enabling proactive risk management and optimized returns. Our scalable, secure solutions cater to both individual investors and institutions, ensuring effortless portfolio growth, enhanced stability, and data-driven decision-making in volatile crypto markets.",
            link: "/contact",
        },
        {
            title: "Custom Algorithmic Trading Solutions",
            description:
                "Transform your trading strategy with bespoke algorithmic solutions, crafted using AWS, GCP, and Azure, and tailored to Binance’s dynamic trading environment. Our team leverages AWS SageMaker for rapid model deployment, GCP’s AI Platform for training sophisticated ML models, and Azure Machine Learning for strategy optimization to build algorithms for strategies like RSI, moving averages, or AI-driven predictions. Each solution includes rigorous backtesting against Binance’s historical data to ensure reliability and performance. Scalable and secure, our algorithms enable low-latency trade execution, empowering traders and businesses to capitalize on market opportunities with precision. From concept to deployment, we deliver customized, high-performance trading systems that drive profitability.",
            link: "/contact",
        },
        {
            title: "Real-Time Market Insights & Notifications",
            description:
                "Stay ahead of the crypto market with our real-time insights and AI-driven notification system, powered by AWS, GCP, and Azure, and integrated with Binance’s WebSocket streams for live market data. GCP Pub/Sub enables event-driven processing, Azure Event Grid powers instant notifications, and AWS SNS delivers alerts via email, SMS, or platforms like Telegram. Our AI models analyze price movements, volume spikes, and custom trading signals to provide actionable insights tailored to your needs. Designed for scalability and reliability, our solutions ensure traders and businesses never miss critical market opportunities. Empower your decision-making with timely, data-driven intelligence in the fast-moving world of crypto trading.",
            link: "/contact",
        },
    ];

    return (
        <>
            <div className="my-8 py-8 bg-gray-50" id="portfolio">
                <h2 className="my-4 text-center text-4xl text-blue-900 uppercase font-bold tracking-wide">
                    AI-Powered Crypto Trading
                </h2>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                    Harness the power of AWS, GCP, and Azure with our AI-driven trading solutions for Binance, designed to maximize profits, minimize risk, and automate your crypto trading journey.
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