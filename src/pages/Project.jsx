import React from 'react';
import Envato from './images/Envato_market.jpg';
import RealEstate from './images/Real_Estate.jpg';
import Recipe from './images/food.jpg';
import Makeup from './images/makeup.jpg';
import Shirt from './images/Shirt.jpg';
import Addproduct from './images/Addproduct.jpg';
import Garden from './images/garden.jpg';
import Licencekey from './images/Licencekey.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { FaExternalLinkAlt } from "react-icons/fa";

import './Project.css';

const Project = () => {
  let navigate = useNavigate();
  let handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="project-container bg-black text-white p-8">
      <h1 className="text-5xl text-red-600 text-center mb-8">My Project</h1>
      <RxCross2 onClick={handleBack} className="close-button-icon mr-32 mt-10 hover:bg-red-600 text-2xl" />

      <div className="project-grid">
        <div className="project-card">
          <h2>Envato Market</h2>
          <img className="w-full h-72" src={Envato} alt="Envato Market" />
        </div>

        <div className="project-card">
          <h2>License Key</h2>
          <img src={Licencekey} alt="License Key" />
        </div>

        <div className="project-card">
          <h2>Add Product</h2>
          <img src={Addproduct} alt="Add Product" />
        </div>

        <div className="project-card">
          <h2>E-commerce</h2>
          <img src={Makeup} alt="E-commerce" />
        </div>

        <div className="project-card">
          <h2>Shirt</h2>
          <img src={Shirt} alt="Shirt" />
        </div>

        <div className="project-card">
          <h2>Recipe</h2>
          <img className="w-full h-72" src={Recipe} alt="Recipe" />
        </div>

        <div className="project-card">
          <h2>Real Estate</h2>
          <img src={RealEstate} alt="Real Estate" />
        </div>

        <div className="project-card">
          <h2>Garden</h2>
          <img src={Garden} alt="Garden" />
        </div>
      </div>

      <div className="visit-buttons mt-14 flex justify-center gap-6">
        <Link
          className="visit-button bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-red-500 transition-all duration-300"
          target="_blank"
          to="https://envato-market-frontend-xbja.vercel.app/"
        >
          Visit Envato Site <FaExternalLinkAlt />
        </Link>
        <Link
          className="visit-button bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-blue-500 transition-all duration-300"
          target="_blank"
          to="https://single-page-website.vercel.app/"
        >
          Visit Real Estate Site <FaExternalLinkAlt />
        </Link>
        <Link
          className="visit-button bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-green-500 transition-all duration-300"
          target="_blank"
          to="https://e-commerce-weld-eta.vercel.app/"
        >
          Visit E-Commerce Site <FaExternalLinkAlt />
        </Link>
      </div>
    </div>
  );
};

export default Project;
