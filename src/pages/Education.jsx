import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // AOS animations
import AOS from 'aos';
import './Education.css'; // Custom styling

const EducationExperience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="education-experience-page ">
      {/* Header Section */}
      <header className="header gap-12">
        <h1 className='text-red-600'>My Education & Experience</h1>
        <p className='text-red-600'>My journey of learning and growing in the tech world.</p>
      </header>

      {/* Education Section */}
      <section className="education-section">
        <h2 className='text-red-600'>Education</h2>
        <div className="education-timeline">
          <div className="timeline-item" data-aos="fade-right">
            <h3 className='text-red-600 text-2xl'>High School</h3>
            <p className='text-blue-500 text-xl'>School Name: Town National Inter College Saidpur Ghazipur Up</p>
            <p>Year: 2018</p>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <h3 className='text-red-600 text-2xl'>Intermediate</h3>
            <p className='text-blue-500 text-xl'>School Name: Town National Inter College Saidpur Ghazipur Up</p>
            <p>Year: 2020</p>
          </div>
          <div className="timeline-item" data-aos="fade-right">
            <h3 className='text-red-600 text-2xl'>Graduation</h3>
            <p className='text-blue-500 text-xl'>College Name: VBSP University Jaunpur UP</p>
            <p>Degree: Bachelor of Science</p>
            <p>Year: 2023</p>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <h3 className='text-red-600 text-2xl'>Internship (MERN Stack Technology)</h3>
            <p className='text-blue-500 text-xl'>Company: Hanumant Technology</p>
            <p>Duration: 6 months</p>
            <p>Skills: MERN Stack</p>
          </div>
        </div>
      </section>x``

      {/* Experience Section */}
      <section className="experience-section">
        <h2 className='text-red-600 text-2xl'>Experience</h2>
        <div className="experience-card text-blue-500 text-xl" data-aos="zoom-in">
          <h3 className='text-red-600 text-2xl'>WICTS Private Limited Company</h3>
          <p>Location: Noida, Sector 16</p>
          <p>Duration: 6 months</p>
          <p>Role: Website Developer</p>
          <ul>
            <li className='text-blue-500 text-xl'>Worked on website development using JavaScript, HTML, CSS, Bootstrap, TailwindCSS, React, and Express.</li>
            <li>Assisted in developing backend APIs using Node.js.</li>
            <li>Gained experience in team collaboration and project management.</li>
          </ul>
        </div>
      </section>

      {/* Certification Section */}
      <section className="certification-section">
        <h2 className='text-red-600 text-2xl'>Certifications</h2>
        <div className="certification-card text-blue-500 text-xl">
          <h3 className='text-blue-500'>ADCA Certification</h3>
          <p>Institution: Dolphin Computers Institute</p>
          <p>Skills: Advanced Diploma in Computer Applications</p>
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
