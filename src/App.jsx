import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/navbar';
import Home from '../src/pages/Home';
import Portfolio from '../src/pages/Portfolio';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Background from '../src/components/Background'
import './styles/global.css'
import ShaderBackground from './components/ShaderBackground';
const App = () => {
  return (
    <Router>
      <Background />
      <ShaderBackground />
      <Navbar />
      <main className="glass-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;