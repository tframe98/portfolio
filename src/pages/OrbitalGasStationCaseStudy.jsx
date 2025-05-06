import '../styles/OrbitalGasStationCaseStudy.css';


const OrbitalGasStationCaseStudy = () => {
  return (
  <div className="case-study-card">
    <h1>Orbital Gas Station</h1>
    <p className='paragraph'>
    The Orbital Gas Station project is a conceptual mobile app designed to reimagine the gas station experience in a futuristic, space-themed world. This immersive design blends convenience store functionality with gamified aesthetics—allowing users to order food, scan rewards, start fueling, and access exclusive deals all within a beautifully cohesive interface.
    </p>

    <h2>Project Goals</h2>
    <ul>
      <li>Design a complete end-to-end user experience for a futuristic gas station app</li>
      <li>Create a consistent visual language and theme tied to a sci-fi universe</li>
      <li>Prioritize ease of use across core features: ordering, fueling, rewards, and deals</li>
      <li>Emphasize motion, iconography, and interactivity to build an engaging mobile experience</li>
    </ul>

    <h2>Research & Inspiration</h2>
    <p>
    I researched user flows from existing convenience apps (7-Eleven, Wawa, Kum & Go) and identified common UX pain points like:
    </p>
    <ul>
      <li>Over-cluttered food ordering screens</li>
      <li>Confusing navigation between fuel/rewards</li>
      <li>Lack of visual storytelling</li>
    </ul>
    <p>I also drew inspiration from sci-fi art styles, arcade UI design, and animated onboarding patterns to create a world that feels playful, intuitive, and futuristic.</p>

    <h2>Key Features</h2>
    <h3 className='subtitle'>Food Ordering System</h3>
    <img src="/imgs/shop.png" alt="Orbital Gas Station Shop" className='showcase-image' />
    <ul>
      <li>Category filter tabs (Fresh Food, Drinks, Snacks, etc.)</li>
      <li>Visual product cards with calories, portion size, and pricing</li>
      <li>Sections like Galactic Favorites, Cosmic Discounts, and Stellar Arrivals to reinforce theme</li>
    </ul>

    <h3>Rewards & Barcode Scanning</h3>
    <img src="/imgs/home.png" alt="Orbital Gas Station Shop" className='showcase-image' />
    <ul>
      <li>Real-time reward progress bar and points wallet</li>
      <li>Scan-at-checkout barcode system</li>
      <li>Gamified success screen on point redemption</li>
    </ul>

    <h3>Fueling Interface</h3>
    <img src="/imgs/fuel.png" alt="Orbital Gas Station Shop" className='showcase-image' />
    <ul>
      <li>Select preferred fuel grade (Hypermatter, Quantum Plasma, etc.)</li>
      <li>Find nearest gas station with stylized planetary map</li>
      <li>Deal integration: “Save $2.00/gal” and other time-sensitive offers</li>
    </ul>

    <h3>“Discover More” Carousel</h3>
    <img src="/imgs/discover.png" alt="Orbital Gas Station Shop" className='showcase-image' />
    <ul>
      <li>Mobile checkout</li>
      <li>Fueling</li>
      <li>Space wash rewards</li>
      <li>Weekly deals</li>
    </ul>

    <h2>Design System</h2>
    <ul>
      <li>Dark UI with neon accents for OLED-friendliness and visual clarity</li>
      <li>Custom illustrations and icons themed around space travel and alien tech</li>
      <li>Rounded card elements, layered depth, and glowing CTA buttons to mimic a sci-fi HUD</li>
      <li>Tab bar navigation with iconography for quick access to Home, Rewards, Fuel, Deals, and Order</li>
    </ul>

    <h2>Outcomes</h2>
    <ul>
      <li>Delivered a fully interactive Figma prototype simulating all core flows</li>
      <li>Received strong peer feedback on UI cohesion, color palette, and iconography</li>
      <li>Selected as a featured project in a design challenge for best thematic consistency</li>
      <li>Sharpened my skills in interactive prototyping, mobile UX patterns, and thematic branding</li>
    </ul>

    <h2>What I learned</h2>
    <p>This project was a deep dive into building world-driven UX—balancing functional design with a strong visual narrative. I learned how to:</p>
    <ul>
      <li>Build scalable UI systems around a story</li>
      <li>Reduce friction in complex user flows (like checkout or fuel selection)</li>
      <li>Use delight and theming as a retention tool without sacrificing usability</li>
    </ul>
    <a href="https://www.figma.com/proto/CA9DjJRuAuAC3zDS35HUFa/Orbital-Gas-Station?page-id=111%3A3222&node-id=131-2&p=f&viewport=199%2C105%2C0.03&t=jJvclhnNM3AMUKc4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=131%3A2" target="_blank" className="case-study-btn">
      View Prototype
    </a>
  </div>
);
};

export default OrbitalGasStationCaseStudy;