import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <><div className="portfolio-card">
      <div className="portfolio-project">
        <div className="project-image">
          <img src="/imgs/pixl-portalz-1.png" alt="PixL PortalZ" />
        </div>
        <div className="project-details">
          <h3>PixL PortalZ</h3>
          <p>A fast-paced 2D vertical platformer designed for quick, casual gameplay—PixL portalZ combines pixel art visuals with intuitive mechanics, challenging players to ascend through levels filled with obstacles, momentum-based jumps, and retro arcade charm.</p>
          <Link to="/portfolio/pixl-portalz" className="case-study-btn">
            View Case Study →
          </Link>
        </div>
      </div>
    </div><div className="portfolio-card">
        <div className="portfolio-project">
          <div className="project-image">
            <img src="/imgs/home.png" alt="PixL PortalZ" />
          </div>
          <div className="project-details">
            <h3>Orbital Gas Station App</h3>
            <p>This immersive design blends convenience store functionality with gamified aesthetics—allowing users to order food, scan rewards, start fueling, and access exclusive deals all within a beautifully cohesive interface.</p>
            <Link to="/portfolio/OrbitalGasStationCaseStudy" className="case-study-btn">
              View Case Study →
            </Link>
          </div>
        </div>
      </div></>

    
  );
};

export default Portfolio;