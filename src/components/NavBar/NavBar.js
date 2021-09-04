import React, { Component } from "react";
import LogoImage from "../../images/logo.png";
import "../../App.css";

class NavBar extends Component {
  render() {
    return (
      <nav
        id="navbar-main"
        className="navbar fixed-top background-restblu nopadding"
      >
        <a href="#" className="navbar-brand text-white">
          <img src={LogoImage}></img>
          Your Logo
        </a>

        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#OurMenu" className="nav-link text-white">
              Our Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="#Promo" className="nav-link text-white">
              Promo
            </a>
          </li>
          <li className="nav-item">
            <a href="#Order" className="nav-link text-white">
              Order
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
