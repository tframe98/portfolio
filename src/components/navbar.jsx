import { Link } from 'react-router-dom';
import '../styles/navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
        <h2 className="logo">Portfolio</h2>
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
    );
};

export default Navbar;