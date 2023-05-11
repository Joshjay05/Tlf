import React, {useState} from 'react'
// import  navItems  from './NavItems'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {GiHamburgerMenu} from "react-icons/gi"
import {ImCross} from "react-icons/im"
import{BiDownArrow} from "react-icons/bi"
import Dropdown from './Dropdown'

const Nav = () => {
    const [mobile, setMobile] =useState(true)
    
    const [dropdown, setDropdown]=useState(false)
    
  return (


    <NavWrapper >
        <section className='section' >
        <ul className='navLinks' >
              <Link>
                <li> Home </li>
                </Link>
                <Link to="/initiatives">
                <li> Initiatives & Programmes </li>
                </Link>
                <Link>
                <li onClick={()=>{if (dropdown===false){setDropdown(true)}
                else{setDropdown(false) } }}   
              style={{position:"relative", padding:"10px"}}>  Get Involved 
              {/* <BiDownArrow/>  */}
   {dropdown && <Dropdown/>}
                    </li>
                </Link>
                <Link to="https://teensliteracyfoundation.blogspot.com/">
                <li> Blog  </li>
                </Link>
                <Link to="#register">
                <li>Contact</li>
                </Link>
                <Link to="/courses">
                <li>Courses</li>
                </Link>
       
        </ul>
        <button className='responsive'> 
        
          {mobile?<GiHamburgerMenu  onClick={()=>{



          }}/>: <ImCross/>}  
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
    gap: 40px;
    /* padding: 20px 10px; */
    align-items:center;
    align-self: center;
    list-style: none;
    text-decoration: none;
    color: #fff;
    padding:20px;
    position: relative;
}

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
    .navlinks{
        display:none;
    }
   
    /* box-shadow: rgba(50,50,93,0.23) 0 30px -20px; */
}

@media screen and (max-width:40em) {
    .navLinks{
        display: none;
    }

    .nav-links-mobile{
        position: absolute;
        display: block;
        list-style: none;
        transition: all 0.5s ease-in-out;
        width: 100%;
        
    }
}

 
`
export default Nav