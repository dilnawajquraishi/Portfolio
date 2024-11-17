import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // AOS animations
import AOS from 'aos';
import './Education.css'; // Custom styling
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

const EducationExperience = () => {
  let navigate = useNavigate();
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="education-experience-page bg-black">
      {/* Header Section */}
      <header className="header gap-12">
        <h1 className='text-pink-500 w-1/2 flex justify-center mt-6 ml-96'>
          My Education & Experience
          <RxCross2 onClick={handleBack} className="close-button-icon mr-32 mt-10 hover:bg-red-600"  />
        </h1>
        <p className='text-white font-bold text-xl'>My journey of learning and growing in the tech world.</p>
      </header>

      {/* Education Section */}
      <section className="education-section">
        <h2 className='text-pink-500'>Education</h2>
        <div className="education-timeline">
          <div className="timeline-item" data-aos="fade-right">
            <h3 className='degree-title text-3xl'>High School</h3>
            <p className='text-white   text-xl'>School Name: Town National Inter College Saidpur Ghazipur Up</p>
            <p className='text-white text-xl'>Year: 2018</p>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <h3 className='degree-title text-3xl'>Intermediate</h3>
            <p className='text-white text-xl '>School Name: Town National Inter College Saidpur Ghazipur Up</p>
            <p  className='text-white text-xl'>Year: 2020</p>
          </div>
          <div className="timeline-item" data-aos="fade-right">
            <h3 className='degree-title text-3xl'>Graduation</h3>
            <p className='text-white text-xl'>College Name: VBSP University Jaunpur UP</p>
            {/* <p>Degree: Bachelor of </p> */}
            <p className='text-white text-xl'>Year: 2023</p>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <h3 className='degree-title text-3xl'>#Internship (MERN Stack Technology)#</h3>
            <p className='text-white text-xl '>Company: Hanumant Technology</p>
            <p className='text-white  text-xl'>Duration: 6 months</p>
            <p className='text-white text-xl'>Passing Year: 2024</p>
            <p className='text-white text-xl'>Skills: MERN Stack</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2 className='text-pink-500'>Experience</h2>
        <div className="experience-card text-gray-700" data-aos="zoom-in">
          <h3 className='text-pink-500'>WICTS Private Limited Company</h3>
          <p className='text-white'>Location: Noida, Sector 16</p>
          <p className='text-white'>Duration: 6 months</p>
          <p className='text-white'>Role: Website Developer</p>
          <ul className='text-white'>
            <li >Worked on website development using JavaScript, HTML, CSS, Bootstrap, TailwindCSS, React js, and Express js.</li>
            <li>Assisted in developing backend APIs using Node.js.</li>
            <li>Gained experience in team collaboration and project management.</li>
          </ul>
        </div>
      </section>

      {/* Certification Section */}
      <section className="certification-section">
        <h2 className='text-pink-500'>Certifications</h2>
        <div className="certification-card text-gray-700">
          <h3 className='text-pink-500'>ADCA Certification</h3>
          <p className='text-white'>Institution: Dolphin Computers Institute</p>
          <p className='text-white'>Skills: Advanced Diploma in Computer Applications</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Connect with me on LinkedIn | GitHub | Email</p>
      </footer>
    </div>
  );
};

export default EducationExperience;
