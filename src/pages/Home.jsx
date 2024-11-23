import React from 'react';
import { Link } from 'react-router-dom';
import './Typewriteeffect.css';
import { FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import profileImage from '../pages/images/Profational_Pic.jpg';

const Home = () => {

  
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white">
      
      {/* ---------------------- Navbar ----------------------- */}
      <nav className='fixed w-full font-bold h-24 bg-black text-white flex flex-row justify-around items-center top-0 shadow-lg z-10 border-b border-gray-700'>
        <h3 className='text-red-500'>Portfolio</h3>
        <ul className='flex gap-4 text-red-500'>
          <Link className='hover:text-sky-500' to='/'>Home</Link>
          <Link className='hover:text-sky-500' to='/about'>About</Link>
          <Link className='hover:text-sky-500' to='/contact'>Contact Me</Link>
          <Link className='hover:text-sky-500' to='/project'>Project</Link>
          <Link className='hover:text-sky-500' to='/skill'>Skill</Link>
          <Link className='hover:text-sky-500' to='/education'>Education</Link>
{/* 
          <Link
  className="hover:text-sky-500"
>
  CV
</Link> */}

        </ul>
      </nav>

      {/* ---------------------- Main Content ----------------------- */}
      <div className='flex-grow pt-28 px-10 bg-black flex flex-col items-center mt-3'>
        <div className="typewriter text-center">
          <h1 className='font-bold text-5xl text-red-500'>I am Dilnawaj,</h1>
          <span className='wev text-red-500 font-bold text-2xl'>A Web Developer with MERN Stack Technology</span>
        </div>
        <p className='text-xl mt-4 max-w-2xl text-center text-red-500'>
          I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services, and online stores.
        </p>

        {/* Profile Image */}
        <div className='w-64 h-64 mt-8 rounded-full overflow-hidden border-4 border-red-500 shadow-lg hover:shadow-[0px_0px_20px_5px_skyblue] transition-all duration-500 transform hover:scale-105'>
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* ---------------------- Skills Section ----------------------- */}
      <section className="bg-black text-white py-10 ">
        <h2 className='text-3xl text-center font-bold text-sky-500 mb-6'>My Skills</h2>
        <div className='flex justify-around'>
          <div className='flex flex-col items-center'>
            <h3 className='text-2xl text-sky-500 mb-6'>Frontend</h3>
            <p className='text-white'>HTML, CSS, JavaScript, React.js,Bootstrap, Tailwindcss</p>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='text-xl text-sky-500 mb-6'>Backend</h3>
            <p>Node.js, Express.js</p>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='text-2xl text-sky-500 mb-6  '>Database</h3>
            <p>MongoDB</p>
          </div>
        </div>
      </section>

      {/* ---------------------- Featured Projects Section ----------------------- */}
      <section className="bg-gray-800 text-white py-10">
        <h2 className='text-3xl text-center font-bold text-sky-500 mb-6'>Featured Projects</h2>
        <div className='flex justify-around'>
          <div className='w-60 p-4 bg-black rounded shadow-lg text-center'>
            <h3 className='text-xl text-red-500'>E-commerce Platform</h3>
            <p>A MERN stack project for a fully-functional online store.</p>
          </div>
          <div className='w-60 p-4 bg-black rounded shadow-lg text-center'>
            <h3 className='text-xl text-red-500'>Portfolio Website</h3>
            <p>A personal portfolio built with React and Node.js.</p>
          </div>
        </div>
      </section>

      {/* ---------------------- Testimonials Section ----------------------- */}
      <section className="bg-black text-white py-10">
        <h2 className='text-3xl text-center font-bold text-sky-500 mb-6'>Testimonials</h2>
        <div className='flex justify-around'>
          <div className='w-60 p-4 bg-gray-800 rounded shadow-lg text-center'>
            <p>"Dilnawaj was fantastic to work with. The website he built exceeded our expectations!"</p>
            <span>- Client A</span>
          </div>
          <div className='w-60 p-4 bg-gray-800 rounded shadow-lg text-center'>
            <p>"Highly recommend for web development. Great skills in React and Node!"</p>
            <span>- Client B</span>
          </div>
        </div>
      </section>

      {/* ---------------------- Contact Section ----------------------- */}
      <section className="bg-gray-800 text-white py-10">
        <h2 className='text-3xl text-center font-bold text-sky-500 mb-6'>Contact Me</h2>
        <div className='flex flex-col items-center gap-4'>
          <p className='text-center'>Have a project in mind? Feel free to reach out!</p>
          <div className='flex gap-6'>
            <Link to='https://github.com/dilnawajquraishi'>
              <FaGithub size={24} className="hover:text-sky-500 hover:scale-110 transform transition-all duration-300 hover:shadow-[0px_0px_10px_3px_skyblue]" />
            </Link>
            <Link to='https://wa.me/7275995475'>
              <FaWhatsapp size={24} className="hover:text-sky-500 hover:scale-110 transform transition-all duration-300 hover:shadow-[0px_0px_10px_3px_skyblue]" />
            </Link>
            <Link to='mailto:@gmail.com'>
              <CgMail size={24} className="hover:text-sky-500 hover:scale-110 transform transition-all duration-300 hover:shadow-[0px_0px_10px_3px_skyblue]" />
            </Link>
            <Link to='https://facebook.com/your-profile'>
              <FaFacebook size={24} className="hover:text-sky-500 hover:scale-110 transform transition-all duration-300 hover:shadow-[0px_0px_10px_3px_skyblue]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------- Footer ----------------------- */}
      <footer className='w-full bg-black text-white py-6 text-center'>
        <p>&copy; {new Date().getFullYear()} Dilnawaj. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
