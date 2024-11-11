import React, { useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    gender: '',
    password: '',
    confirmPassword: '',
    address: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page flex flex-col items-center bg-black text-white">
      <h1 className="text-6xl mb-8 text-red-300 neon-title mt-3">Contact Us</h1>

      <div className="contact-container flex w-full gap-24  justify-center items-start">
        {/* Individual Contact Icons with Neon Animation */}
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

        {/* Contact Form */}
        <form className="contact-form w-1/2 p-8 bg-black rounded-lg shadow-xl transition-transform duration-500 hover:scale-105">
          <div className="form-group">
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            <label className={formData.name ? 'filled' : ''}>Name</label>
          </div>
          <div className="form-group">
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
            <label className={formData.email ? 'filled' : ''}>Email</label>
          </div>
          <div className="form-group">
            <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required />
            <label className={formData.contactNumber ? 'filled' : ''}>Contact Number</label>
          </div>
          <div className="form-group">
            <select name="gender" value={formData.gender} onChange={handleInputChange} required>
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label className={formData.gender ? 'filled' : ''}>Gender</label>
          </div>
          <div className="form-group">
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
            <label className={formData.password ? 'filled' : ''}>Password</label>
          </div>
          <div className="form-group">
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
            <label className={formData.confirmPassword ? 'filled' : ''}>Confirm Password</label>
          </div>
          <div className="form-group">
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
            <label className={formData.address ? 'filled' : ''}>Address</label>
          </div>
          <button type="submit" className="submit-button bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg mt-6 shadow-lg transition-transform duration-300 hover:scale-105">
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-6 flex flex-col items-center gap-4 shadow-lg mt-12 border-t-2 border-gray-700">
        <div className="flex gap-6">
          <FaGithub size={24} className="icon-style transition-transform duration-300 hover:scale-125" />
          <FaWhatsapp size={24} className="icon-style transition-transform duration-300 hover:scale-125" />
          <CgMail size={24} className="icon-style transition-transform duration-300 hover:scale-125" />
          <FaFacebook size={24} className="icon-style transition-transform duration-300 hover:scale-125" />
        </div>
        <div className="flex gap-6">
          <Link className="hover:text-sky-500 transition duration-300" to="#">FAQ</Link>
          <Link className="hover:text-sky-500 transition duration-300" to="#">About Me</Link>
          <Link className="hover:text-sky-500 transition duration-300" to="#">Contact</Link>
          <Link className="hover:text-sky-500 transition duration-300" to="#">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
