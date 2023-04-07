import React from 'react'
import styled from 'styled-components'
import volhead from '../img/vol.jpg'
import {FaBeer} from 'react-icons/fa'

const Volunteer = () => {
  return (
    <VolunteerContainer className="v-header">
        <article className="v_head">
          <div classsName="v_headtext">    

            <h5>Become a Volunteer</h5>
            <span className="v_title">Be Our Community</span>
            <p className='v_description'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, alias.</p>
            <div><button class="btn-a">Know More</button> <button class="btn-b">Donate Now</button></div>
          </div>
        </article>

        <section>  
        <article className="vol-middle">
          
        <p> Become a Volunteer </p>
        <div className="divider"></div>

        <p>lorem30
        </p>

        <a  classname="vol-section"href="/">
<span> <FaBeer/><div> <h6>Make Donation</h6>
<p>keeping loremesmihihsghsjjjcjhjcxhushxuhu</p></div></span>
<span><div> <span>Make Donation</span>
<span>keeping loremesmihihsghsjjjcjhjcxhushxuhu</span></div></span>
        </a>
        
        
          </article>  
          <article>

          </article>
<a href="/" className="vol-footer">
  <div className="vf-desc">
  <span>Give Donation</span>
  <span>loremjsjjhjdjhjdjhjdjhjd</span>
  </div> <strong>.01</strong>
  <div className="vf-desc">
  <span>Give Scholarship</span>
  <span>loremjsjjhjdjhjdjhjdjhjd</span>
  </div> <strong>.02</strong>
  <div className="vf-desc">
  <span>Fund our programmes</span>
  <span>loremjsjjhjdjhjdjhjdjhjd</span>
  </div> <strong>.03</strong> </a>
      </section>
    </VolunteerContainer>
  )
}



const VolunteerContainer = styled.section`
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
    line-height:3.5em;
    .v_headtext h3{
      background-color: #D94A39;
      font-size:20px;
      color:red;
      border:1px solid #D94A39
    }

    .btn-a{
      /* background-color: #D94A39;
      border:1px solid #D94A39; */
      background-color:transparent;
      border:1px solid #fff;
      color:white;
      border-radius:5px;
      padding:5px 10px;
    }
    .btn-b{
      background-color:transparent;
      border:1px solid #fff;
      outline:none;
      color:white;
      border-radius:5px;
      padding:5px 10px;
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
      color:white;
      /* width:50%; */
    }
    .v_description{
      padding-inline:27%;
      font-size:14px;
    }
  }



`
export default Volunteer;