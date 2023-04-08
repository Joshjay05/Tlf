import React from 'react'
import styled from 'styled-components'
import volhead from '../img/vol.jpg'
import {FaBeer} from 'react-icons/fa'
import vimage from '../img/volun.jpg'
import "./volunteer.css"

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

        <section className='v-desc_section'> 



        {/*  */}
          <section className='vln-container'>    
        <article className="vol-middle">
          <div className="frst">
        <h4> Become a Volunteer </h4>
        <div className="divider"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laboriosam non quaerat eligendi iste optio repellat doloribus sed a odit?
        </p>
        </div>

        <article className="vol-section">
          {/*  */}
<section className='ctx'> 
<FaBeer/><div className='txt'><span className="txt-1">Make Donation</span>
<span className="txt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente facere qui hic omnis perspiciatis neque perferendis consectetur adipisci magni?</span></div>
</section>
{/*  */}
<section className='ctx'> <FaBeer/><div className='txt'> <span className="txt-1">Make Donation</span>
<span className="txt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente facere qui hic omnis perspiciatis neque perferendis consectetur adipisci magni?</span></div></section>
{/*  */}

{/*  */}
</article>
<article className="vol-section">
          {/*  */}
<section className='ctx'> 
<FaBeer/><div className='txt'><span className="txt-1">Make Donation</span>
<span className="txt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente facere qui hic omnis perspiciatis neque perferendis consectetur adipisci magni?</span></div>
</section>
{/*  */}
<section className='ctx'> <FaBeer/><div className='txt'> <span className="txt-1">Make Donation</span>
<span className="txt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente facere qui hic omnis perspiciatis neque perferendis consectetur adipisci magni?</span></div></section>
{/*  */}

{/*  */}
</article>
          </article > 
          {/*  */}         
          <div className='image-sec'>
          <img src={vimage} alt=''/>
          </div>
          </section>

<a href="/" className="vol-footer">
  <div className="vf-desc1">
  <span>Give Donation</span>
  <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat laudantium aperiam quia vel praesentium cum deleniti molestiae excepturi fugiat quam.</span>
  <strong className='no-1'>.01</strong>
  </div> 
  <div className="vf-desc2">
  <span>Give Scholarship</span>
  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus maxime expedita porro officia fugiat voluptates explicabo quo consequuntur quasi.</span>
  <strong className='no-2'>.02</strong>
  </div> 
  <div className="vf-desc3">
  <span>Fund our programmes</span>
  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint officia quos autem maxime soluta minima ipsum molestiae </span>
  <strong className='no-1'>.03</strong>
  </div>  </a>
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