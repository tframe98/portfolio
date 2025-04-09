import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-project">
        <div className="project-image">
          <img src="/public/imgs/pixl-portalz-1.png" alt="PixL PortalZ" />
        </div>
        <div className="project-details">
          <h3>PixL PortalZ</h3>
          <p>A fun, engaging 2D vertical platformer built with Phaser.js.</p>
          <Link to="/portfolio/pixl-portalz" className="case-study-btn">
            View Case Study →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;