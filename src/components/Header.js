import React from "react";
import "../assets/css/Header.css";

function Navbar() {
  return (
    <div className="header">
      <div className="logo">
        <h1>Logo</h1>
      </div>

      <div className="navBar">
        <ul>
          <a href="">
            {" "}
            <li>Home</li>{" "}
          </a>
          <a href="">
            {" "}
            <li>Laptops</li>{" "}
          </a>
          <a href="">
            {" "}
            <li>Desktops</li>{" "}
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
