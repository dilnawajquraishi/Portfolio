import React from 'react';
import Envato from './images/Envato_market.jpg';
import RealEstate from './images/Real_Estate.jpg';
import Recipe from './images/food.jpg';
import Makeup from './images/makeup.jpg';
import Shirt from './images/Shirt.jpg';
import Addproduct from './images/Addproduct.jpg';
import Garden from './images/garden.jpg';
import Licencekey from './images/Licencekey.jpg';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = () => {
  return (
    <div className="project-container bg-black text-white p-8">
      <h1 className="text-5xl text-red-600 text-center mb-8">My Project</h1>

      <div className="project-grid">
        {/* Envato Market */}
        <div className="project-card">
    
          <h2>Envato Market</h2>
          <img className="w-full h-72" src={Envato} alt="Envato Market" />
         
        </div>

        {/* License Key */}
        <div className="project-card">
          <h2>License Key</h2>
          <img src={Licencekey} alt="License Key" />
          {/* Add link here if needed */}
        </div>

        {/* Add Product */}
        <div className="project-card">
          <h2>Add Product</h2>
          <img src={Addproduct} alt="Add Product" />
          {/* Add link here if needed */}
        </div>

        {/* E-commerce */}
        <div className="project-card">
          <h2>E-commerce</h2>
          <img src={Makeup} alt="E-commerce" />
        
        </div>

        {/* Shirt */}
        <div className="project-card">
          <h2>Shirt</h2>
          <img src={Shirt} alt="Shirt" />
          {/* Add link here if needed */}
        </div>

        {/* Recipe */}
        <div className="project-card">
          <h2>Recipe</h2>
          <img className="w-full h-72" src={Recipe} alt="Recipe" />
          {/* Add link here if needed */}
        </div>

        {/* Real Estate */}
        <div className="project-card">
          <h2>Real Estate</h2>
          <img src={RealEstate} alt="Real Estate" />
         
        </div>

        {/* Garden */}
        <div className="project-card">
          <h2>Garden</h2>
          <img src={Garden} alt="Garden" />
          {/* Add link here if needed */}
        </div>

        
      </div>
   <div className="w-56 bg-fuchsia-500 h-28 mt-14">
   <Link className="bg-white mt-2 p-1 block text-center text-black" target="_blank" to="https://envato-market-frontend-xbja.vercel.app/">
            Visit my Site
          </Link>
          <Link className="bg-white mt-2 p-1 block text-center text-black" target="_blank" to="https://single-page-website.vercel.app/">
            Visit my Real Estate website
          </Link>
          <Link className="bg-white mt-2 p-1 block text-center text-black" target="_blank" to="https://e-commerce-weld-eta.vercel.app/">
            Visit my E-Commerce website
          </Link>
   </div>
    </div>
  );
};

export default Project;
