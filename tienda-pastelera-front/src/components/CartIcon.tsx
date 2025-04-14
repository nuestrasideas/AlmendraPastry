import React from 'react';
import { Link } from 'react-router-dom';

const CartIcon: React.FC = () => {
  return (
    <Link to="/cart" className="nav-link">
      <i className="fa fa-shopping-cart" style={{ fontSize: '24px' }}></i>
    </Link>
  );
};

export default CartIcon;
