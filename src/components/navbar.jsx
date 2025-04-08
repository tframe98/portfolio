import { Link } from 'react-router-dom';
import '../styles/navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
        <h2 className="logo">Portfolio</h2>
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