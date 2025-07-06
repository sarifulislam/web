import React, { useState } from 'react';
import Notiflix from 'notiflix';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import NavBar from '../components/Navbar/NavBar';
import { useDocTitle } from '../components/CustomHook';
import { app } from '../firebaseConfig';
import { Helmet } from 'react-helmet-async';

const db = getFirestore(app);

const professions = [
  "Software Engineer",
  "Data Scientist",
  "Web Developer",
  "Mobile App Developer",
  "Product Manager",
  "Project Manager",
  "UI/UX Designer",
  "Graphic Designer",
  "Marketing Specialist",
  "Sales Executive",
  "Business Analyst",
  "Accountant",
  "Financial Analyst",
  "Lawyer",
  "Doctor",
  "Nurse",
  "Teacher",
  "Researcher",
  "Consultant",
  "Engineer",
  "Architect",
  "Customer Support",
  "Human Resources",
  "Operations Manager",
  "Entrepreneur",
  "Freelancer",
  "Other"
];

const positions = [
  "CEO",
  "Founder",
  "Co-Founder",
  "Managing Director",
  "Director",
  "VP (Vice President)",
  "Senior Manager",
  "Manager",
  "Team Lead",
  "Senior Engineer",
  "Engineer",
  "Associate",
  "Analyst",
  "Consultant",
  "Intern",
  "Contractor",
  "Advisor",
  "Partner",
  "Freelancer",
  "Assistant",
  "Other"
];

const countryCodes = [
  { code: "+1", label: "United States / Canada" },
  { code: "+44", label: "United Kingdom" },
  { code: "+91", label: "India" },
  { code: "+61", label: "Australia" },
  { code: "+81", label: "Japan" },
  { code: "+49", label: "Germany" },
  { code: "+33", label: "France" },
  { code: "+39", label: "Italy" },
  { code: "+86", label: "China" },
  { code: "+971", label: "United Arab Emirates" },
  { code: "+966", label: "Saudi Arabia" },
  { code: "+92", label: "Pakistan" },
  { code: "+880", label: "Bangladesh" },
  { code: "+94", label: "Sri Lanka" },
  { code: "+7", label: "Russia" },
  { code: "+55", label: "Brazil" },
  { code: "+27", label: "South Africa" },
  { code: "+34", label: "Spain" },
  { code: "+82", label: "South Korea" },
  { code: "+46", label: "Sweden" },
  { code: "+31", label: "Netherlands" },
  { code: "+41", label: "Switzerland" },
  { code: "+351", label: "Portugal" },
  { code: "+63", label: "Philippines" },
  { code: "+20", label: "Egypt" },
  { code: "+62", label: "Indonesia" },
  { code: "+48", label: "Poland" },
  { code: "+64", label: "New Zealand" },
  { code: "+60", label: "Malaysia" },
  { code: "+66", label: "Thailand" },
  { code: "+52", label: "Mexico" }
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

  const clearErrors = () => {
    setErrors({});
  };

  const clearInput = () => {
    setFormData({
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
      Notiflix.Report.failure(
        'Validation Error',
        'Please fill in all required fields.',
        'Okay'
      );
      return;
    }

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Loading...';

    const submitData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      company: formData.company,
      email: formData.email,
      profession: formData.profession,
      position: formData.position,
      phone_number: formData.countryCode + ' ' + formData.phone,
      message: formData.message,
    };

    try {
      await addDoc(collection(db, 'contacts'), submitData);
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message';
      clearInput();
      Notiflix.Report.success(
        'Success',
        'Your message has been sent successfully!',
        'Okay'
      );
    } catch (error) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message';
      Notiflix.Report.failure(
        'An error occurred',
        `Unable to connect to the server. Error: ${error.message}`,
        'Okay'
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - ChatWhole</title>
        <meta name="description" content="Get in touch with ChatWhole for expert data engineering and data science services." />
        <link rel="canonical" href="https://chatwhole.com/contact" />
        <meta property="og:title" content="Contact Us - ChatWhole" />
        <meta property="og:description" content="Get in touch with ChatWhole for expert data engineering and data science services." />
        <meta property="og:url" content="https://chatwhole.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - ChatWhole" />
        <meta name="twitter:description" content="Get in touch with ChatWhole for expert data engineering and data science services." />
      </Helmet>
      <NavBar />
      <div id="contact" className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
          <form onSubmit={handleSubmit}>
            <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
                  Send us a message
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <input
                    name="firstName"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    name="lastName"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
                <div>
                  <input
                    name="company"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    name="email"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                  <select
                    name="profession"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    value={formData.profession}
                    onChange={handleChange}
                  >
                    <option value="">Select Profession*</option>
                    {professions.map((prof) => (
                      <option key={prof} value={prof}>{prof}</option>
                    ))}
                  </select>
                  {errors.profession && <p className="text-red-500 text-sm">{errors.profession}</p>}
                </div>
                <div>
                  <select
                    name="position"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    value={formData.position}
                    onChange={handleChange}
                  >
                    <option value="">Select Position*</option>
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>{pos}</option>
                    ))}
                  </select>
                  {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
                </div>
                <div className="flex">
                  <select
                    name="countryCode"
                    className="bg-gray-100 text-gray-900 mt-2 p-3 rounded-l-lg focus:outline-none focus:shadow-outline w-1/3"
                    value={formData.countryCode}
                    onChange={handleChange}
                  >
                    {countryCodes.map(({ code, label }) => (
                      <option key={code} value={code}>{label} ({code})</option>
                    ))}
                  </select>
                  <input
                    name="phone"
                    className="w-2/3 bg-gray-100 text-gray-900 mt-2 p-3 rounded-r-lg focus:outline-none focus:shadow-outline"
                    type="tel"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  id="submitBtn"
                  className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
