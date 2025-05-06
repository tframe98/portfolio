import { Link } from "react-router-dom";
import "../styles/Home.css";


const Home = () => {
  return (
    <div className="home-card">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm Tyler Frame</h1>
          <h2>Creative Full Stack Developer</h2>
          <p>Crafting engaging, dynamic, and interactive digital experiences with modern technologies.</p>
          <Link to="/portfolio" className="cta-button">View My Work</Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="introduction-section">
        <div className="intro-text">
          <h3>About My Work</h3>
          <p>
            With expertise in modern frontend frameworks, backend development, and a keen eye for design, I build seamless applications tailored to user needs. My focus areas include React, Node.js, Prisma, PostgreSQL, and more.
          </p>
        </div>
      </section>

      {/* Navigation & CTAs */}
      <section className="navigation-section">
        <nav className="navigation-links">
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        <div className="secondary-cta">
          <Link to="/about" className="cta-button-secondary">Learn More About Me</Link>
        </div>
      </section>

      {/* Featured Projects or Highlights */}
      <section className="featured-projects-section"> 
        <h3>Featured Projects</h3>
        <div className="featured-projects">
          <div className="project-card">
            <h4>PixL portalZ</h4>
            <p>A fast-paced 2D vertical platformer designed for quick, casual gameplay—PixL portalZ combines pixel art visuals with intuitive mechanics, challenging players to ascend through levels filled with obstacles, momentum-based jumps, and retro arcade charm.</p>
            <Link to="/portfolio/pixl-portalz" className="project-link">Explore Project →</Link>
          </div>

          <div className="project-card">
            <h4>Orbital Gas Station</h4>
            <p>This immersive design blends convenience store functionality with gamified aesthetics—allowing users to order food, scan rewards, start fueling, and access exclusive deals all within a beautifully cohesive interface.</p>
            <Link to="/portfolio/OrbitalGasStationCaseStudy" className="project-link">Explore Project →</Link>
          </div>
        </div>
      </section> 
    </div>
  );
};

export default Home;