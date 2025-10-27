"use client";
import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

  const handleSubmit = () => {
    if (isFormValid) {
      setShowPopup(true);
      // Optionally reset form here if needed
      // setFormData({ fullName: '', email: '', company: '', message: '' });
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-[#0067B1] min-h-screen px-4 py-10 max-w-full overflow-x-hidden"
      style={{ boxSizing: 'border-box' }}
    >
      <div className="w-full max-w-[1362px] flex flex-wrap md:flex-nowrap gap-12 h-auto">
        {/* Left Section */}
        <div className="flex-1 min-w-[280px] max-w-[551px] flex flex-col justify-center px-8 py-6 text-white font-manrope text-[20px]">
          <h1 className="text-4xl mb-4">Get in touch</h1>
          <div className="w-12 h-0.5 bg-white mb-6"></div>
          <p className="mb-4">For general enquiries</p>
          <p className="mb-2"><strong>Address :</strong></p>
          <p className="mb-4">110, 16th Road, Chembur, Mumbai – 400071</p>
          <p className="mb-2"><strong>Phone :</strong></p>
          <p className="mb-4">+91 22 25208822</p>
          <p className="mb-2"><strong>Email :</strong></p>
          <p>info@supremegroup.co.in</p>
        </div>

        {/* Right Section */}
        <div className="flex-1 min-w-[280px] max-w-[551px] flex flex-col justify-center px-8 py-6 gap-6">
          <input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border-b border-white placeholder-white text-white font-manrope text-[20px] outline-none"
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border-b border-white placeholder-white text-white font-manrope text-[20px] outline-none"
          />
          <input
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border-b border-white placeholder-white text-white font-manrope text-[20px] outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border-b border-white placeholder-white text-white font-manrope text-[20px] outline-none resize-none"
          />
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            style={{
              width: '141px',
              height: '50px',
              borderRadius: '100px',
              borderWidth: '1px',
              paddingTop: '10px',
              paddingRight: '30px',
              paddingBottom: '10px',
              paddingLeft: '30px',
              gap: '10px',
            }}
            className={`bg-white text-[#0067B1] rounded-full font-manrope text-[20px] self-start ${
              !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Send
          </button>
        </div>
      </div>

      {/* Responsive popup alert at bottom center */}
      {showPopup && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-blue-600 text-white rounded shadow-lg z-50 flex items-center">
          <p className="text-lg font-semibold">Form Submitted Successfully</p>
          <button
            onClick={closePopup}
            className="ml-4 px-3 py-1 bg-white text-blue-600 rounded hover:bg-gray-100"
            aria-label="Close alert"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
