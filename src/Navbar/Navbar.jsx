import React, { useState } from "react";
import navItems from "../NavItems";
import "./nav.css"
import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown";
const Navb = () => {
    const [dropdown, setDropdown]=useState(false)
    console.log(navItems);
  return (
    <div className="nav-container">
      <ul className="navItems" onClick={()=>{setDropdown(!dropdown)}}>
        {navItems?.map((item) => {
          return (
            <div key={item.id} className={item.cName}>
              <NavLink to={item.path} onClick={()=>(setDropdown)}>{item.Title}</NavLink>
            </div>
          );
        })}

      </ul>
      <Dropdown/>
      <button></button>
    </div>
  );
};

export default Navb;
