import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebaseConfig';
import Notiflix from 'notiflix';
import logo1 from '../images/portfolio.svg';
import logo2 from '../images/trading-bot.svg';
import logo3 from '../images/algo-trading.svg';

const db = getFirestore(app);

const PricingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
    budget: '',
  });
  const [hours, setHours] = useState(10); // Default hours for cost estimator
  const [errors, setErrors] = useState({});
  const hourlyRate = 20;

  const budgets = [
    '$500 - $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error for the field being edited
  };

  const handleHoursChange = (e) => {
    setHours(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.projectDetails) newErrors.projectDetails = 'Project details are required.';
    if (!formData.budget) newErrors.budget = 'Budget selection is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearInput = () => {
    setFormData({
      name: '',
      email: '',
      projectDetails: '',
      budget: '',
    });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      Notiflix.Report.failure('Validation Error', 'Please fill in all required fields.', 'Okay');
      return;
    }

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';

    const submitData = {
      name: formData.name,
      email: formData.email,
      projectDetails: formData.projectDetails,
      budget: formData.budget,
      estimatedHours: hours,
      estimatedCost: hours * hourlyRate,
    };

    try {
      await addDoc(collection(db, 'pricingInquiries'), submitData);
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Inquiry';
      clearInput();
      Notiflix.Report.success('Success', 'Your inquiry has been sent successfully!', 'Okay');
    } catch (error) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Inquiry';
      Notiflix.Report.failure('Error', `Unable to connect to the server. Error: ${error.message}`, 'Okay');
    }
  };

  const faqs = [
    {
      question: 'What does the $20/hour rate include?',
      answer: 'The rate covers end-to-end data engineering services, including pipeline design, development, testing, and deployment by our expert developers.',
    },
    {
      question: 'How do you assign developers to my project?',
      answer: 'We assess your project’s workload and allocate top-notch developers with expertise in tools like AWS, Snowflake, or Kafka, scaling as needed.',
    },
    {
      question: 'What types of data pipelines do you build?',
      answer: 'We deliver ETL/ELT pipelines, cloud integrations (AWS, GCP, Snowflake), real-time streaming (Kafka, Spark), and more, customized to your needs.',
    },
    {
      question: 'Is there a minimum commitment?',
      answer: 'No minimum commitment. You pay only for the hours worked, with flexible scaling based on your project requirements.',
    },
  ];

  // Animation variants for Framer Motion
  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0px 4px 15px rgba(79, 70, 229, 0.4)', transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-600 text-white py-12 text-center"
      >
        <h1 className="text-4xl font-bold">End-to-End Data Engineering at $20/Hour</h1>
        <p className="mt-4 text-lg">
          Hire top-notch developers to build your data pipelines with transparent, flexible pricing.
        </p>
      </motion.header>

      {/* Pricing Section with Cost Estimator */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-gray-800"
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 text-lg text-gray-600"
        >
          Get end-to-end data pipeline solutions for just <strong>$20 per hour</strong> with expert developers tailored to your project’s workload.
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-4xl font-bold text-blue-600">
            $20<span className="text-lg">/hour</span>
          </h3>
          <p className="mt-4 text-gray-600">
            Flexible developer allocation for your data pipeline projects, from design to deployment.
          </p>
          {/* Cost Estimator */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800">Estimate Your Project Cost</h4>
            <div className="flex justify-center items-center mt-4">
              <input
                type="range"
                min="1"
                max="100"
                value={hours}
                onChange={handleHoursChange}
                className="w-64 mr-4"
              />
              <span className="text-gray-600">{hours} hours</span>
            </div>
            <p className="mt-4 text-xl font-semibold text-gray-800">
              Estimated Cost: ${hours * hourlyRate}
            </p>
          </div>
          <ul className="mt-6 space-y-3 text-left max-w-md mx-auto">
            {[
              'End-to-end pipeline development (ETL/ELT, cloud integrations)',
              'Top-notch developers (AWS, Snowflake, Kafka, Spark)',
              'Flexible scaling based on project workload',
              'No hidden fees, pay only for hours worked',
            ].map((feature, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                className="flex items-center text-gray-600"
              >
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </motion.li>
            ))}
          </ul>
          {/* Updated Contact Form */}
          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="mt-8 bg-glass backdrop-blur-xs border border-glassBorder rounded-2xl shadow-xl p-8 max-w-md mx-auto"
            id="contact-form"
            aria-labelledby="contact-form"
          >
            <h1
              id="contact-form"
              className="text-3xl font-extrabold text-primary mb-6 text-center uppercase tracking-wide drop-shadow-md"
            >
              Let’s Discuss Your Data Pipeline
            </h1>
            <p className="text-gray-600 mb-6 text-center">
              Share your project details, and we’ll provide a tailored quote with the right developers.
            </p>
            <div className="space-y-6">
              <div>
                <input
                  name="name"
                  className={`w-full p-4 rounded-lg bg-white/80 border-2 border-glassBorder focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all duration-300 ${errors.name ? 'border-red-500' : ''}`}
                  type="text"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-required="true"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  name="email"
                  className={`w-full p-4 rounded-lg bg-white/80 border-2 border-glassBorder focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all duration-300 ${errors.email ? 'border-red-500' : ''}`}
                  type="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  aria3 aria-required="true"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  name="projectDetails"
                  className={`w-full h-32 p-4 rounded-lg bg-white/80 border-2 border-glassBorder focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all duration-300 resize-none ${errors.projectDetails ? 'border-red-500' : ''}`}
                  placeholder="Tell us about your data pipeline needs...*"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  aria-required="true"
                />
                {errors.projectDetails && <p className="text-red-500 text-sm mt-1">{errors.projectDetails}</p>}
              </div>
              <div>
                <select
                  name="budget"
                  className={`w-full p-4 rounded-lg bg-white/80 border-2 border-glassBorder focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all duration-300 ${errors.budget ? 'border-red-500' : ''}`}
                  value={formData.budget}
                  onChange={handleInputChange}
                  aria-required="true"
                >
                  <option value="">Select your budget*</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
                {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
              </div>
              <motion.button
                type="submit"
                id="submitBtn"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full p-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/50 transition-all duration-300"
                aria-label="Submit inquiry form"
              >
                Send Inquiry
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="border-b pb-4"
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Elements */}
      <section className="bg-gray-100 py-12 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800"
        >
          Trusted by Leading Companies
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center gap-8 mt-6"
        >
          <img src={logo1} alt="Client Logo 1" className="h-12" />
          <img src={logo2} alt="Client Logo 2" className="h-12" />
          <img src={logo3} alt="Client Logo 3" className="h-12" />
        </motion.div>
      </section>

      {/* CTA Footer */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-600 text-white py-12 text-center"
      >
        <h2 className="text-3xl font-bold">Build Your Data Pipeline Today</h2>
        <p className="mt-4 text-lg">Our top-notch developers are ready to deliver your end-to-end solution.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
        >
          Request a Quote
        </motion.button>
      </motion.section>
    </div>
  );
};

export default PricingPage;