import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Example using react-icons for a shopping cart icon
import "./style.css" 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
  <g fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="9" cy="21" r="1.5"/>
    <circle cx="19" cy="21" r="1.5"/>
    <path d="M2 2h3l1.68 3.36a2 2 0 0 0 1.8 1.04h9.54a2 2 0 0 1 1.86 1.28l2.56 6.41a1 1 0 0 1-.95 1.36H8.21M12 15H8"/>
  </g>
</svg>
        <h1>ShopMate</h1> {/* Your brand name */}
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart"><FaShoppingCart /> Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
