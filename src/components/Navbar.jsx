import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/growthrick-logo-new.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Growth Rick Logo" />
        </Link>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/platform" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Our Platform</NavLink></li>
            <li><NavLink to="/case-studies" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Case Studies</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>About Us</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Blog</NavLink></li>
            <li><NavLink to="/resources" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Resources</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </div>
        
        <a href="https://calendly.com/vamsi-growthrick" target="_blank" rel="noopener noreferrer" className="schedule-btn" onClick={closeMenu}>Schedule Session</a>
        
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
