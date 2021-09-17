import React, { useState } from "react";
import { Link } from "react-scroll";

import logo from "../images/logo1.png";
// import logo from "../images/logo2.jpg";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo">
        <img src={logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon "> </span>
      </label>
      <ul className="menu">
        <li>
          <Link to="#">Main </Link>
        </li>
        <li>
          <Link to="#">Products </Link>
        </li>
        <li>
          <Link to="#">About </Link>
        </li>
        <li>
          <Link to="#">Contact </Link>
        </li>
      </ul>
    </nav>
  );
}
