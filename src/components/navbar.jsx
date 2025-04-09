import { Link } from 'react-router-dom';
import '../styles/navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src="/imgs/logo.png" alt="Logo" className="logo-img" />
            
        <h2 className="logo">Tyler Frame</h2>
        </div>
        <div className="nav-links">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/portfolio">Portfolio</Link></div>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/contact">Contact</Link></div>
        </div>
    </nav>
    );
};

export default Navbar;