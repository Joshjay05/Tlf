// import React, {useState, useEffect} from "react";
import logo from "../img/tlf.jpeg";
import "./header.css";
import Navb from "../Navbar/Navbar";
// import Nav from "../Nav";



const Header = () => {
  // const [Navbar, setNavbar] =useState(false)
  // const changeBackground = () => {
  //   if (window.scrollY) {
  //     setNavbar(true)
  //   } else {
  //     setNavbar(false)
  //   }
    
  // }
  // useEffect(() => {
  //   changeBackground();
   
  //   window.addEventListener("scroll", changeBackground)
  // },)
  return (
    <header>
      <nav className="nav">
        <div className="rightNav">
          <img src={logo} className="logo" alt="" />
          <span className="logo-title">Teens Literacy Foundation</span>
        </div>
        {/* <Nav/> */}
       <Navb/>
       
      </nav>
    </header>
  );
};

export default Header;
