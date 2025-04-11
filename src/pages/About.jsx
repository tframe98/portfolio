import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-card">
      <div className="about-container">
        <div className="about-image">
          
          <img src="/imgs/headshot.jpg" alt="Tyler Frame" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm <strong>Tyler Frame</strong>, a passionate <strong>Full Stack Developer and Product Designer</strong> based in Reno, NV. With a strong foundation in modern web technologies, I enjoy creating intuitive and engaging digital experiences.
          </p>
          
          <h3>Professional Background</h3>
          <p>
            I recently graduated from Fullstack Academy's intensive Full Stack Web Development Bootcamp, gaining expertise in <strong>React.js, Node.js, TypeScript, PostgreSQL, Prisma, and more.</strong> Throughout my career, I've worked as a Product Designer and Developer at companies like <strong>ryco.io, floorwire, and Wilson Develops</strong>, focusing on user-centric design and robust web application development.
          </p>

          <h3>Technical Skills</h3>
          <ul>
            <li><strong>Front-End:</strong> React.js, HTML/CSS, JavaScript, TypeScript, React Router</li>
            <li><strong>Back-End:</strong> Node.js, PostgreSQL, Prisma, REST APIs</li>
            <li><strong>Design:</strong> Figma, UI/UX Design, Wireframing, Prototyping, User Research</li>
            <li><strong>Security:</strong> JWT, Bcrypt, Authentication Strategies</li>
          </ul>

          <h3>My Interests</h3>
          <p>
            Beyond coding, I focus heavily on personal development and physical fitness. My ideal day includes lifting weights, cardio, meditation, reading books on stoicism, and continuous self-improvement. My goal is to develop the "body of an athlete, mind of a stoic, spirit of a warrior, and heart of a poet."
          </p>

          <div className="about-contact">
            <p>Want to collaborate or get in touch?</p>
            <a href="/contact" className="contact-button">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
