import React from 'react';
import blockchainImg from '../images/algo-trading.svg'; // Kept single image as per original code

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
                        Crypto Trading Automation
                    </h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                        Empowering wealth creation with AI-driven trading solutions on AWS, GCP, and Azure.
                    </h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img
                                    alt="AI-Driven Binance Trading Bots"
                                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                    src={blockchainImg}
                                />
                                <h2 className="font-semibold my-4 text-2xl text-center">
                                    AI-Driven Binance Trading Bots
                                </h2>
                                <p className="text-md font-medium">
                                    Transform your crypto trading with AI-powered bots built on AWS, GCP, and Azure, seamlessly integrated with Binance APIs. Leveraging AWS Lambda for low-latency execution, GCP’s AI Platform for predictive model training, and Azure Machine Learning for strategy optimization, our bots execute high-precision strategies like arbitrage, scalping, and trend trading. Designed for scalability and security, they operate 24/7, adapting to volatile markets to maximize profits. Our solutions reduce manual effort, delivering consistent returns for retail traders and enterprises alike, ensuring a competitive edge in the dynamic crypto landscape.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img
                                    alt="Intelligent Portfolio Optimization"
                                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                    src={blockchainImg}
                                />
                                <h2 className="font-semibold my-4 text-2xl text-center">
                                    Intelligent Portfolio Optimization
                                </h2>
                                <p className="text-md font-medium">
                                    Optimize your crypto investments with our intelligent portfolio management, powered by AWS, GCP, and Azure, and integrated with Binance APIs for real-time insights. GCP BigQuery delivers advanced analytics, Azure Functions enables dynamic rebalancing, and AWS DynamoDB ensures secure data storage. Our AI-driven system forecasts market trends, adjusts allocations, and mitigates risks to align with your financial goals. Scalable and secure, our solutions empower individual investors and institutions to achieve consistent growth with minimal effort, thriving in volatile crypto markets through data-driven strategies.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img
                                    alt="Custom Algorithmic Trading Solutions"
                                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                    src={blockchainImg}
                                />
                                <h2 className="font-semibold my-4 text-2xl text-center">
                                    Custom Algorithmic Trading Solutions
                                </h2>
                                <p className="text-md font-medium">
                                    Elevate your trading with bespoke algorithms crafted on AWS, GCP, and Azure, tailored to Binance’s dynamic trading environment. Using AWS SageMaker for rapid model deployment, GCP’s AI Platform for training ML models, and Azure Machine Learning for optimization, we build strategies like RSI-based trading or AI-driven predictions. Rigorous backtesting with Binance’s historical data ensures reliability. Our scalable, low-latency solutions enable traders and businesses to seize market opportunities with precision, delivering high-performance trading systems that drive profitability and adaptability in the fast-paced crypto market.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img
                                    alt="Real-Time Market Insights & Notifications"
                                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                                    src={blockchainImg}
                                />
                                <h2 className="font-semibold my-4 text-2xl text-center">
                                    Real-Time Market Insights & Notifications
                                </h2>
                                <p className="text-md font-medium">
                                    Stay ahead with AI-driven real-time insights and notifications, powered by AWS, GCP, and Azure, and integrated with Binance WebSocket streams. GCP Pub/Sub enables event-driven processing, Azure Event Grid powers instant alerts, and AWS SNS delivers notifications via email, SMS, or Telegram. Our AI models analyze price movements, volume spikes, and custom signals, providing actionable intelligence. Scalable and reliable, our solutions ensure traders and businesses never miss critical market opportunities, empowering confident decision-making in the fast-moving world of crypto trading.
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