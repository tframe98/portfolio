import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/navbar';
import Home from '../src/pages/Home';
import Portfolio from '../src/pages/Portfolio';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';


const App = () => {
  return (
    <Router>
      
      
      <Navbar />
      <main >
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