import '../styles/PixLPortalZCaseStudy.css';


const PixLPortalZCaseStudy = () => {
  return (
  <div className="case-study-card">
    <h1>PixL PortalZ</h1>
    <p>
      PixL PortalZ is an engaging, browser-based 2D vertical platform game built with Phaser.js,
      offering players a quick and enjoyable gaming experience directly in their browsers.
    </p>

    <h2>Objectives & Goals</h2>
    <ul>
      <li>Engage users with intuitive gameplay</li>
      <li>Showcase interactive JavaScript capabilities</li>
      <li>Easy browser access without downloads</li>
    </ul>

    <h2>Design & Development</h2>
    <p>
      PixL PortalZ was developed using Phaser.js for smooth animations and responsive interactions.
      Significant attention was given to optimizing gameplay performance and intuitive control schemes.
    </p>

    <h2>Challenges & Solutions</h2>
    <ul>
      <li><strong>Challenge:</strong> Performance optimization<br/>
          <strong>Solution:</strong> Optimized assets and managed resource loading carefully.</li>
      <li><strong>Challenge:</strong> Responsive controls<br/>
          <strong>Solution:</strong> User testing and feedback-driven refinements.</li>
    </ul>

    <h2>Gameplay Showcase</h2>
    <div className="media-showcase">
      <img src="/public/imgs/pixl-portalz-1.png" alt="PixL PortalZ Gameplay" className='showcase-image' />
      <img src="/public/imgs/pixl-portalz-2.png" alt="PixL PortalZ Gameplay" className='showcase-image' />
      <img src="/public/imgs/pixl-portalz-3.png" alt="PixL PortalZ Gameplay" className='showcase-image' />
      <img src="/public/imgs/pixl-portalz-4.png" alt="PixL PortalZ Gameplay" className='showcase-image' />
    </div>

    <h2>Outcomes & Achievements</h2>
    <ul>
      <li>Smooth gameplay consistently at 60fps.</li>
      <li>Positive user experience feedback at Fullstack Academy.</li>
    </ul>

    <h2>Technologies</h2>
    <p>Phaser.js, JavaScript, HTML/CSS, Node.js, PostgreSQL, Prisma</p>

    <h2>Learnings</h2>
    <p>Advanced knowledge in Phaser.js and performance optimization techniques.</p>

    <a href="https://pixl-portalz.onrender.com" target="_blank" className="case-study-btn">
      Play PixL PortalZ
    </a>
  </div>
);
};

export default PixLPortalZCaseStudy;