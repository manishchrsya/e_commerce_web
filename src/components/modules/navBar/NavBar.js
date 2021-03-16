import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <div className='nav-link-containers'>
          <a className='nav-link'>Shop</a>
          <a  className='nav-link'>Contact</a>
        </div>
        <div className='nav-brand-logo'>
          <h2>BrandName</h2>
        </div>
        <div className='nav-link-containers'>
          <a className='nav-link'>Account</a>
          <a className='nav-link'>Cart</a>
          <button class="btn btn-outline-success">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
