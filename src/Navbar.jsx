import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar">
          <div className="navbar-logo">
            <img src="src\assets\images\alpha-logo.png" alt="" />
          </div>
          <nav className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/passes">Passes</Link>
            <Link to="/contact">Contact Us</Link>
          
            <Link to="/login" className="navbar-signin">Sign In</Link>
            <Link to="/register" className="navbar-signup">Sign Up</Link>
          </nav>
        </nav>
      );
    };
    
export default Navbar;