import React from 'react'
import "./navbar.css"
import { navItems } from './NavItems'
import {Link} from "react-router-dom"

const Navbar = () => {
  const navItems = [
    {
        id: 1,
        Title:"Home",
        path:"./",
        cName: "nav-item",
    },
    {
        id: 2,
        Title:"Initiatives & Programmes",
        path:"./initiatives",
        cName: "nav-item",
    },
    {
        id: 3,
        Title:"Get Involved",
        path:"./getinvolved",
        cName: "nav-item",
    },
    {
        id: 4,
        Title:"Donate",
        path:"./donate",
        cName: "nav-item",
    },
    {
        id: 5,
        Title:"Blog",
        path:"./blog",
        cName: "nav-item",
    },
    {
        id: 6,
        Title:"Contact",
        path:"./contact",
        cName: "nav-item",
    },
]
  return (
    <div>
        <nav className="navbar">
            {/* <Link to="/" className="nav-logo">
fhfd
            </Link> */}
            <ul>
                {navItems.map((item) =>{
return(
    <li key={item.id} className={item.cName}>
        <Link to={item.path}>{item.title}</Link>
    </li>)})}
            </ul>
        </nav>
    </div>
  )
}



export default Navbar