import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-danger-subtle">
      <div className="container">
        <Link className="navbar-brand" to="/">
          AlmendraPastryChef
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <CartIcon />
            </li>
          </ul>
        </div>
      </div>


    </header>
  );
};



export default Header;
