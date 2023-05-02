import React, {useState} from 'react'
// import  navItems  from './NavItems'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {GiHamburgerMenu} from "react-icons/gi"
import {ImCross} from "react-icons/im"
import{BiDownArrow} from "react-icons/bi"

const Nav = () => {
    // const [mobile, setMobile] =useState(true)
    
  return (


    <NavWrapper >
        <section className='section' >
        <ul className='navLinks' >
              <Link>
                <li> Home </li>
                </Link>
                <Link>
                <li> Initiatives & Programmes </li>
                </Link>
                <Link>
                <li> Get Involved <BiDownArrow/> 
                    </li>
                </Link>
                <Link>
                <li>Blog  </li>
                </Link>
                <Link>
                <li>Contact</li>
                </Link>
       
   
        </ul>
        <button className='responsive'>
            submit
          {/* {<ImCross/>:<GiHamburgerMenu/>}   */}
        </button>
        </section>
    </NavWrapper>


 
  )
}

const NavWrapper =styled.section`
.section{
    display: flex;
    align-items: center;
    gap: 5px;
}
 .navLinks{
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    gap: 8px;
    /* padding: 20px 10px; */
    align-items:center;
    align-self: center;
    list-style: none;
    text-decoration: none;
    color: #fff;}

    .navLinks li:hover{
        text-decoration: underline;
        /* color: #61d0ff; */
        color: #ee6627f8;
        transition: all 0.5s ease-in-out;
    }
    
    .navLinks li, Link{
text-decoration: none;
color: #fff;
font-size:20px;
font-family: Mullish;
font-weight: 400;

    }


    /* box-shadow: rgba(50,50,93,0.23) 0 30px 30px -20px; */
@media screen and (max-width:40em) {
    /* .logo{
        display
    } */
    /* .navlinks{
        display:none;
    }
    .nav-links-mobile{
        position: absolute;
        display: block;
        list-style: none;
        transition: all 0.5s ease-in-out;
        width: 100%;
        
    } */
    /* box-shadow: rgba(50,50,93,0.23) 0 30px -20px; */
}

 
`
export default Nav