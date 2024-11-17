import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './About.css';
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import aboutimg from '../pages/images/picDil.jpg'



const About = () => {
    let navigate=useNavigate()
    const handleBack=()=>{
        navigate(-1)
    }
    return (
        <div className="about-container">
            {/* Header Section */}
            <motion.div
                className="intro-section"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="highlight-text">Hello, I'm <span> Mr Dilnawaj </span></h1>
                <h1 className="highlight-text">Hello, I'm <span>Mern Stack Developer</span></h1>

      <RxCross2 onClick={handleBack} className="cursor-pointer close-button-icon hover:bg-red-600 text-red-700 mt-6 mr-10 text-2xl" />

                <p>A creative <span>Frontend Developer</span> passionate about modern web design.</p>
                <motion.img
                    src={aboutimg}
                    alt="John Doe"
                    className="profile-image"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>

            {/* Skills Section */}
            <div className="skills-section">
                <h2 className="section-title">My Skills</h2>
                <motion.div
                    className="skills-grid"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    }}
                >
                    <motion.div className="skill-card" whileHover={{ scale: 1.1 }}>JavaScript</motion.div>
                    <motion.div className="skill-card" whileHover={{ scale: 1.1 }}>React.js</motion.div>
                    <motion.div className="skill-card" whileHover={{ scale: 1.1 }}>CSS/SCSS</motion.div>
                    <motion.div className="skill-card" whileHover={{ scale: 1.1 }}>Node.js</motion.div>
                    <motion.div className="skill-card" whileHover={{ scale: 1.1 }}>MongoDB</motion.div>
                    <motion.div className="skill-card" whileHover={{ scale: 1.1 }}>Git & GitHub</motion.div>
                    <motion.div className="skill-card" whileHover={{ scale: 1.1 }}>TailwindCss</motion.div>

                </motion.div>
            </div>

            {/* Technology Stack Section */}
            <div className="tech-stack">
                <h2 className="section-title">Technologies I Use</h2>
                <motion.div
                    className="tech-icons"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div className="icon">HTML5</motion.div>
                    <motion.div className="icon">CSS3</motion.div>
                    <motion.div className="icon">React</motion.div>
                    <motion.div className="icon">Node.js</motion.div>
                </motion.div>
            </div>

            {/* Social Links */}
            <div className="cta-section">
                <h3>Let's Connect!</h3>
                <div className="social-links">
                    <motion.a href="https://linkedin.com" whileHover={{ scale: 1.3 }}>
                        <FaLinkedin />
                    </motion.a>
                    <motion.a href="https://github.com/dilnawajquraishi" whileHover={{ scale: 1.3 }}>
                        <FaGithub />
                    </motion.a>
                    <motion.a href="https://twitter.com" whileHover={{ scale: 1.3 }}>
                        <FaTwitter />
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default About;
