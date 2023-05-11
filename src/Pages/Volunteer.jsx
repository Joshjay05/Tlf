import React from 'react'
import styled from 'styled-components'
import volhead from '../img/vol.jpg'
// import {FaBeer} from 'react-icons/fa'
// import vimage from '../img/volun.jpg'
import "./volunteer.css"
// import Event from './Event'
import { Link } from 'react-router-dom'

const Volunteer = () => {
  return (
    <VolunteerContainer className="v-header">
        <article className="v_head">
          <div classsName="v_headtext">    

            <h5>Become a Volunteer</h5>
            <span className="v_title">Be part of Our Community</span>
            {/* <p className='v_description'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, alias.</p> */}
            <div> <Link class="btn-a" to="/volunteer"> 
            Know More
            </Link>  <Link class="btn-b" to="/donate">Donate Now</Link></div>
          </div>
        </article>
       
    </VolunteerContainer>
  )
}



const VolunteerContainer = styled.section`
  .v_head{
    padding-block: 30px;
    background:url(${volhead});
    background-position: center center;
        background-repeat: no-repeat;
        /* height: 90vh;s */
       margin-block-start:40px;
        background-size: cover;
       color:#fff;
        box-shadow:inset  0 0 0 2000px rgba(0,0,0,0.70);
        text-align: center;
        display:flex;
    flex-direction:column;
    align-items:center;
    color:#fff;
    justify-content:center;
    line-height:3.5em;
    .v_headtext h3{
      background-color: #D94A39;
      font-size:20px;
      color:red;
      border:1px solid #D94A39
    }
    /* @media screen and (min-width:40em){
      .v_head{
    background:url(${volhead});
    background-position: center center;
        background-repeat: no-repeat;
        height: 90vh;
       margin-block-start:40px;
        background-size: cover;
       color:#fff;
        box-shadow:inset  0 0 0 2000px rgba(0,0,0,0.70);
        text-align: center;
        display:flex;
    flex-direction:column;
    align-items:center;
    color:#fff;
    justify-content:center;
    line-height:3.5em;} 
    } */


   
    .btn-a{
      /* background-color: #D94A39;
      border:1px solid #D94A39; */
      background-color:transparent;
      border:1px solid #fff;
      color:white;
      border-radius:5px;
      text-decoration: none;
      padding:5px 10px;
    }
    .btn-b{
      background-color:transparent;
      border:1px solid #fff;
      outline:none;
      color:white;
      border-radius:5px;
      padding:5px 10px;
      text-decoration: none;
    }
    .btn-a:hover,.btn-b:hover{
      transition:all 0.5s ease-in-out;
       background-color: #dd4f3f;
      border:1px solid #D94A39; 
    }
    .v_title{
      border: 1px solid #D94A39;
      font-size:25px;
      font-weight:500;
      border-radius:6px;
      /* border-width: 50%; */
      /* width:100%; */
      background-color:#D94A39;
      padding:4px 70px;
      color:#fff;
      /* width:50%; */
    }
    .v_description{
      padding-inline:27%;
      font-size:14px;
      color: #fff;
    }

    @media screen and (max-width:40em) {
      .v_title{
        font-size:14px;
        padding: 10px;
      }
      .v_description{
        font-size: 12px;
        line-height: 2em;
      }
      .v_head{
        background:url(${volhead});
    background-position: center center;
        background-repeat: no-repeat;
        /* height: 50vh; */
       margin-block-start:40px;
        background-size: cover;
       color:#fff;
        box-shadow:inset  0 0 0 2000px rgba(0,0,0,0.70);
        text-align: center;
        display:flex;
    flex-direction:column;
    align-items:center;
    color:#fff;
    justify-content:center;
    line-height:3.5em;
      
      }
    }

  }



`
export default Volunteer;