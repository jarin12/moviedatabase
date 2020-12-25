import React from "react";
import {Link} from "react-router-dom";

const Navbar = ()=>
{
    return(
        <div>
        <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo" s> MovieDB </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">popular movies </a></li>
        <li><a href="badges.html"> TV show </a></li>
        <li><a href="collapsible.html">profile </a></li>
      </ul>
    </div>
  </nav>
  </div>
    );
};
export default Navbar;
