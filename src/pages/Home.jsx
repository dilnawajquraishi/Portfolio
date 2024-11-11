import React from 'react';
import { Link } from 'react-router-dom';
import './Typewriteeffect.css'; // Import the typewriter effect CSS
import { FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import profileImage from '../pages/images/Profational_Pic.jpg';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white">
      
      {/* ---------------------- Navbar ----------------------- */}
      <nav className='fixed w-full font-bold h-24 bg-black text-white flex flex-row justify-around items-center top-0 shadow-lg z-10 border-b border-gray-700'>
        <h3 className='text-red-500'>PortfoLinko</h3>
        <ul className='flex gap-4 text-red-500'>
          <Link className='hover:text-sky-500' to='/'>Home</Link>
          <Link className='hover:text-sky-500' to='/'>About</Link>
          <Link className='hover:text-sky-500' to='/contact'>Contact Me</Link>
          <Link className='hover:text-sky-500' to='/project'>Project</Link>
          <Link className='hover:text-sky-500' to='/skill'>Skill</Link>
          <Link className='hover:text-sky-500' to='/education'>Education</Link>
          <Link className='hover:text-sky-500'>CV</Link>
        </ul>
      </nav>

      {/* ---------------------- Main Content ----------------------- */}
      <div className='flex-grow pt-28 px-10 bg-black flex flex-row justify-evenly items-center'>
        <div>
          <div className="typewriter ">
            <h1 className='font-bold text-5xl text-red-500'>I am Dilnawaj,</h1>
            <span className=' wev text-red-500 font-bold text-2xl'>A Web Developer with Mern Stack Technology </span>
          </div>
          <p className='text-xl mt-4 w-96 text-red-500'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
        </div>
        

        {/* Profile Image */}
        <div className='w-64 h-64 rounded-full overflow-hidden border-4 border-red-500 shadow-lg hover:shadow-[0px_0px_20px_5px_skyblue] transition-all duration-500 transform hover:scale-105'>
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* ----------------------------Project--------------------------- */}
<div className="project w-full bg-purple-700">
<div className="">
  
</div>
</div>


      {/* ---------------------- Footer ----------------------- */}
      <footer className='fixed bottom-0 w-full bg-black text-white py-4 flex flex-col items-center gap-4 shadow-lg border-t border-t-red-500'>

        <div className='flex gap-6'>
        {/* https://github.com/ */}
          <FaGithub size={24} className="hover:text-sky-500 hover:scale-110 transform transition-all duration-300 hover:shadow-[0px_0px_10px_3px_skyblue]" />
          <FaWhatsapp size={24} className="hover:text-sky-500 hover:scale-110 transform transition-all duration-300 hover:shadow-[0px_0px_10px_3px_skyblue]" />
          <CgMail size={24} className="hover:text-sky-500 hover:scale-110 transform transition-all duration-300 hover:shadow-[0px_0px_10px_3px_skyblue]" />
          <FaFacebook size={24} className="hover:text-sky-500 hover:scale-110 transform transition-all duration-300 hover:shadow-[0px_0px_10px_3px_skyblue]" />
        </div>
        <div className='flex gap-6 text-blue-600 '>
          <Link className='hover:text-sky-500' to='#'>FAQ</Link>
          <Link className='hover:text-sky-500' to='#'>About Me</Link>
          <Link className='hover:text-sky-500' to='#'>Contact</Link>
          <Link className='hover:text-sky-500' to='#'>Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
