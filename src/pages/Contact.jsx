import React, { useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    gender: '',
    password: '',
    confirmPassword: '',
    address: ''
  });

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Form submitted successfully!');
      } else {
        setMessage('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-page flex flex-col items-center bg-black text-white gap-8">
      <h1 className="text-6xl mb-8 text-red-400 neon-title mt-5 w-1/2 flex flex-row justify-between ml-96">
        Contact Us 
        <RxCross2 onClick={handleBack} className="cursor-pointer close-button-icon hover:bg-red-600 text-red-700 mt-6 mr-3 text-2xl" />
      </h1>

      <div className="contact-container flex w-full gap-32 justify-center items-start">
        <div className="contact-info space-y-12 mt-12">
          <div className="neon-box whatsapp flex items-center gap-3 p-8 rounded-lg transition-transform duration-300">
            <FaWhatsapp size={32} /> <span>7275995475</span>
          </div>
          <div className="neon-box email flex items-center gap-3 p-8 rounded-lg transition-transform duration-300">
            <CgMail size={32} /> <span>dilnawajquraishi5@gmail.com</span>
          </div>
          <div className="neon-box location flex items-center gap-3 p-8 rounded-lg transition-transform duration-300">
            <IoLocationOutline size={32} /> <span>Lucknow, UP</span>
          </div>
        </div>

        <form
          className="contact-form w-1/2 p-8 bg-black rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
          onSubmit={handleSubmit}
        >
          {/* Form Fields */}
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder=" "
            />
            <label className={formData.name ? 'filled' : ''}>Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder=" "
            />
            <label className={formData.email ? 'filled' : ''}>Email</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
              placeholder=" "
            />
            <label className={formData.contactNumber ? 'filled' : ''}>Contact Number</label>
          </div>
          <div className="form-group">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              placeholder=" "
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label className={formData.gender ? 'filled' : ''}>Gender</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder=" "
            />
            <label className={formData.password ? 'filled' : ''}>Password</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              placeholder=" "
            />
            <label className={formData.confirmPassword ? 'filled' : ''}>Confirm Password</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              placeholder=" "
            />
            <label className={formData.address ? 'filled' : ''}>Address</label>
          </div>

          <button
            type="submit"
            className="submit-button bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg mt-6 shadow-lg transition-transform duration-300 hover:scale-105"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
          {message && <p className="message mt-4">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
