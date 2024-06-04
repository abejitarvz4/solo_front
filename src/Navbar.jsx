import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signOut } from './firebaseConfig/firebase'; 

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth).catch(error => {
      console.error('Error signing out: ', error);
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/assets/images/alpha-logo.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/passes">Passes</Link>
        <Link to="/contact mr-2">Contact Us</Link>
        {user ? (
          <div className="navbar-user">
            <span className="navbar-username">Hola!, {user.displayName || user.email}</span>
            <button className="navbar-signout" onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <>
            <Link to="/login" className="navbar-signin">Sign In</Link>
            <Link to="/register" className="navbar-signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
