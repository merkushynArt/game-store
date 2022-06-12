import React from 'react';
import { Link } from 'react-router-dom';
import CartBlock from '../Cart-block/CartBlock';
import './header.css';

const Header = () => {
   return (
      <div className='header'>
         <div className="wrapper">
            <Link to="/" className='header__store-title'>
               Game Store
            </Link>
         </div>
         <div className="wrapper header__cart-btn-wrapper">
            <CartBlock/>
         </div>
      </div>
   )
}

export default Header