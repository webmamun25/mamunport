import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import './navbar.css'
import logo from '../../../images/Group.png'
const Navbar = () => {
    return (
        <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <div className="logo">
        <img  src={logo} alt="" />
        </div>
        
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="link" href="/">About</a>
        </li>
        <li class="nav-item">
          <a class="link" href="/">Project</a>
        </li>
        <li class="nav-item">
          <a class="link" href="/">Contact Me</a>
        </li>
        
        
      </ul>
     
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;