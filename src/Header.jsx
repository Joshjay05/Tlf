import React from "react";
import logo from "./img/logo.jpeg";
import "./header.css";
// import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="rightNav">
          <img src={logo} className="logo" alt="" />
          <span>Teens Literacy Foundation</span>
        </div>
        {/* <Navbar /> */}
      </nav>
    </header>
  );
};

export default Header;
