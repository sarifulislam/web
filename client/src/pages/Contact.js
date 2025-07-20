import React, { useState } from 'react';
import Notiflix from 'notiflix';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import NavBar from '../components/Navbar/NavBar';
import { useDocTitle } from '../components/CustomHook';
import { app } from '../firebaseConfig';
import { Helmet } from 'react-helmet-async';
import Seo from '../components/Seo';
import contact from '../data/contact.json';
import { motion } from 'framer-motion';
import chatwholeLogo from '../images/chatwhole.jpg';

const db = getFirestore(app);

// Arrays for professions, positions, and countryCodes
const professions = [
  "Software Engineer", "Data Scientist", "Web Developer", "Mobile App Developer",
  "Product Manager", "Project Manager", "UI/UX Designer", "Graphic Designer",
  "Marketing Specialist", "Sales Executive", "Business Analyst", "Accountant",
  "Financial Analyst", "Lawyer", "Doctor", "Nurse", "Teacher", "Researcher",
  "Consultant", "Engineer", "Architect", "Customer Support", "Human Resources",
  "Operations Manager", "Entrepreneur", "Freelancer", "Other"
];

const positions = [
  "CEO", "Founder", "Co-Founder", "Managing Director", "Director", "VP (Vice President)",
  "Senior Manager", "Manager", "Team Lead", "Senior Engineer", "Engineer", "Associate",
  "Analyst", "Consultant", "Intern", "Contractor", "Advisor", "Partner", "Freelancer",
  "Assistant", "Other"
];

const countryCodes = [
  { code: "+1", label: "United States / Canada" },
  { code: "+44", label: "United Kingdom" },
  { code: "+91", label: "India" },
  { code: "+971", label: "United Arab Emirates" },
  { code: "+966", label: "Saudi Arabia" },
  { code: "+974", label: "Qatar" },
  { code: "+968", label: "Oman" },
  { code: "+965", label: "Kuwait" },
  { code: "+973", label: "Bahrain" },
  { code: "+20", label: "Egypt" },
  { code: "+212", label: "Morocco" },
  { code: "+27", label: "South Africa" },
  { code: "+61", label: "Australia" },
  { code: "+81", label: "Japan" },
  { code: "+82", label: "South Korea" },
  { code: "+86", label: "China" },
  { code: "+49", label: "Germany" },
  { code: "+33", label: "France" },
  { code: "+39", label: "Italy" },
  { code: "+7", label: "Russia" },
  { code: "+55", label: "Brazil" },
  { code: "+34", label: "Spain" },
  { code: "+31", label: "Netherlands" },
  { code: "+46", label: "Sweden" },
  { code: "+41", label: "Switzerland" },
  { code: "+64", label: "New Zealand" },
  { code: "+358", label: "Finland" },
  { code: "+47", label: "Norway" },
  { code: "+48", label: "Poland" },
  { code: "+351", label: "Portugal" },
  { code: "+353", label: "Ireland" },
  { code: "+420", label: "Czech Republic" },
  { code: "+36", label: "Hungary" },
  { code: "+380", label: "Ukraine" },
  { code: "+234", label: "Nigeria" },
  { code: "+254", label: "Kenya" },
  { code: "+256", label: "Uganda" },
  { code: "+263", label: "Zimbabwe" },
  { code: "+90", label: "Turkey" },
  { code: "+52", label: "Mexico" },
  { code: "+507", label: "Panama" },
  { code: "+506", label: "Costa Rica" },
  { code: "+503", label: "El Salvador" },
  { code: "+502", label: "Guatemala" },
  { code: "+54", label: "Argentina" },
  { code: "+56", label: "Chile" },
  { code: "+58", label: "Venezuela" },
  { code: "+60", label: "Malaysia" },
  { code: "+62", label: "Indonesia" },
  { code: "+63", label: "Philippines" },
  { code: "+66", label: "Thailand" },
  { code: "+84", label: "Vietnam" },
  { code: "+65", label: "Singapore" },
  { code: "+852", label: "Hong Kong" },
  { code: "+853", label: "Macau" },
  { code: "+886", label: "Taiwan" }
];

const Contact = () => {
  useDocTitle('ChatWhole - Contact Us');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    profession: '',
    position: '',
    countryCode: '+1',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const clearErrors = () => setErrors({});

  const clearInput = () => {
    setFormData({
      firstName: '', lastName: '', company: '', email: '',
      profession: '', position: '', countryCode: '+1', phone: '', message: ''
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    if (!formData.position) newErrors.position = 'Position is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    clearErrors();
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
      first_name: formData.firstName,
      last_name: formData.lastName,
      company: formData.company,
      email: formData.email,
      profession: formData.profession,
      position: formData.position,
      phone_number: `${formData.countryCode} ${formData.phone}`,
      message: formData.message,
    };

    try {
      await addDoc(collection(db, 'contacts'), submitData);
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message';
      clearInput();
      Notiflix.Report.success('Success', 'Your message has been sent successfully!', 'Okay');
    } catch (error) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message';
      Notiflix.Report.failure('Error', `Unable to connect to the server. Error: ${error.message}`, 'Okay');
    }
  };

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } }
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0px 4px 15px rgba(79, 70, 229, 0.4)', transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact Us - ChatWhole",
    "url": "https://chatwhole.com/contact",
    "description": "Get in touch with ChatWhole for expert data engineering and data science services and solutions.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://chatwhole.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact Us",
          "item": "https://chatwhole.com/contact"
        }
      ]
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "ChatWhole",
      "url": "https://chatwhole.com",
      "logo": "https://chatwhole.com/logo192.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 98004 35692",
        "contactType": "customer service",
        "email": "appchatwhole@gmail.com",
        "areaServed": "IN"
      }
    }
  };

  return (
    <>
      <Seo
        title="Contact Us - ChatWhole"
        description="Get in touch with ChatWhole for expert data engineering and data science services."
        url="https://chatwhole.com/contact"
        structuredData={structuredData}
      />
      <NavBar />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen animated-gradient flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-poppins overflow-visible"
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl">
          {/* Company Info Section */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="bg-glass backdrop-blur-xs border border-glassBorder rounded-2xl shadow-xl p-8 max-w-md w-full flex flex-col items-center text-center z-10"
            aria-labelledby="company-info"
          >
            <img
              src={chatwholeLogo}
              alt="ChatWhole Logo"
              className="w-36 h-36 object-contain mb-6 rounded-full border-4 border-accent shadow-md"
            />
            <h2 id="company-info" className="text-3xl font-bold text-primary mb-4">{contact.company}</h2>
            <p className="text-gray-600 mb-4 text-lg font-semibold">Our Office</p>
            <address className="not-italic text-gray-500 text-sm leading-relaxed mb-6">
              {contact.address.line1},<br />
              {contact.address.line2},<br />
              {contact.address.postalCode},<br />
              {contact.address.country}
            </address>
            <div className="flex flex-col gap-3">
              <p className="text-gray-600 flex items-center justify-center gap-2 font-semibold">
                <span className="text-primary">Phone:</span>
                <span className="font-normal">{contact.phone}</span>
              </p>
              <p className="text-gray-600 flex items-center justify-center gap-2 font-semibold">
                <span className="text-primary">Email:</span>
                <a href={`mailto:${contact.email}`} className="text-secondary hover:underline font-normal">{contact.email}</a>
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="bg-glass backdrop-blur-xs border border-glassBorder rounded-2xl shadow-xl p-8 max-w-2xl w-full z-10"
            aria-labelledby="contact-form"
          >
            <h1 id="contact-form" className="text-4xl sm:text-5xl font-extrabold text-primary mb-8 text-center uppercase tracking-wide drop-shadow-md">
              Send Us a Message
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  name="firstName"
                  className={`w-full p-4 rounded-lg bg-white/80 border-2 border-glassBorder focus:border-secondary focus:ring-2 focus:ring-accent/50 focus:outline-none transition-all duration-300 ${errors.firstName ? 'border-red-500' : ''}`}
                  type="text"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  aria-required="true"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <input
                  name="lastName"
                  className={`w-full p-4 rounded-lg bg-white/80 border-2 border-glassBorder focus:border-secondary focus:ring-2 focus:ring-accent/50 focus:outline-none transition-all duration-300 ${errors.lastName ? 'border-red-500' : ''}`}
                  type="text"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  aria-required="true"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
              <div>
                <input
                  name="company"
                  className="w-full p-4 rounded-lg bg-white/80 border-2 border-glassBorder focus:border-secondary focus:ring-2 focus:ring-accent/50 focus:outline-none transition-all duration-300"
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  name="email"
                  className={`w-full p-4 rounded-lg bg-white/80 border-2 border-glassBorder focus:border-secondary focus:ring-2 focus:ring-accent/50 focus:outline-none transition-all duration-300 ${errors.email ? 'border-red-500' : ''}`}
                  type="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <select
                  name="profession"
                  className="w-full p-4 rounded-lg bg-white/80 border-2 border-glassBorder focus:border-secondary focus:ring-2 focus:ring-accent/50 focus:outline-none transition-all duration-300"
                  value={formData.profession}
                  onChange={handleChange}
                >
                  <option value="">Select Profession</option>
                  {professions.map((prof) => (
                    <option key={prof} value={prof}>{prof}</option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  name="position"
                  className={`w-full p-4 rounded-lg bg-white/80 border-2 border-glassBorder focus:border-secondary focus:ring-2 focus:ring-accent/50 focus:outline-none transition-all duration-300 ${errors.position ? 'border-red-500' : ''}`}
                  value={formData.position}
                  onChange={handleChange}
                  aria-required="true"
                >
                  <option value="">Select Position*</option>
                  {positions.map((pos) => (
                    <option key={pos} value={pos}>{pos}</option>
                  ))}
                </select>
                {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
              </div>
              <div className="flex gap-4">
                <select
                  name="countryCode"
                  className="w-1/3 p-4 rounded-lg bg-white/80 border-2 border-glassBorder focus:border-secondary focus:ring-2 focus:ring-accent/50 focus:outline-none transition-all duration-300"
                  value={formData.countryCode}
                  onChange={handleChange}
                >
                  {countryCodes.map(({ code, label }) => (
                    <option key={code} value={code}>{label} ({code})</option>
                  ))}
                </select>
                <div className="flex-1">
                  <input
                    name="phone"
                    className={`w-full p-4 rounded-lg bg-white/80 border-2 border-glassBorder focus:border-secondary focus:ring-2 focus:ring-accent/50 focus:outline-none transition-all duration-300 ${errors.phone ? 'border-red-500' : ''}`}
                    type="tel"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-required="true"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div className="md:col-span-2">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className={`w-full h-40 p-4 rounded-lg bg-white/80 border-2 border-glassBorder focus:border-secondary focus:ring-2 focus:ring-accent/50 focus:outline-none transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : ''}`}
                  value={formData.message}
                  onChange={handleChange}
                  aria-required="true"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <div className="md:col-span-2 mt-6">
                <motion.button
                  type="submit"
                  id="submitBtn"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full p-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 z-20"
                  aria-label="Submit contact form"
                >
                  Send Message
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;