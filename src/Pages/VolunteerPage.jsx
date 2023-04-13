import React from 'react'
import "./event.css"
// import Footer from "../Footer"
import styled from 'styled-components'
import vol from "../img/vll.jpg"
// import v1 from "../img/volunteer.jpg"
// import v2 from "../img/vl.jpg"
// import v3 from "../img/donations.jpg"

// import volhead from '../img/vol.jpg'
import {FaBeer} from 'react-icons/fa'
import vimage from '../img/volun.jpg'
import "./volunteer.css"
import Footer from '../Footer/Footer'
import Donate from './Donate'

const VolunteerPage = () => {
  return (
   
     <EventContainer>
<article className="vol-head" >
    <div className='vol-text'> 

    <span className='v-call'>Register As a Volunteer</span>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid architecto cum sunt aut explicabo ullam esse repellendus at praesentium optio ducimus, distinctio officia, dolorem provident commodi, aperiam earum? Doloremque.</p>
    <div>
    <input placeholder="Enter your Mail"/><button className='sn-button'>SignUp</button>
    </div>
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

      <section  className="donation-page">

<Donate />
      </section>
        <Footer/>
     </EventContainer>
    
  )
}

const EventContainer = styled.section`
    .vol-head{
        background: url(${vol});
       
        background-position: center center;
        background-repeat: no-repeat;
        height: 50vh;
       
        background-size: cover;
       
        box-shadow:inset  0 0 0 2000px rgba(0,0,0,0.70);
        text-align: center;
        .vol-text{
            
            /* filter:blur(0.2): */
            display:flex;
            justify-content:center;
            flex-direction:column;
           gap:8px;
           padding-block: 5%;
           align-items:center;
           padding-inline:20%;
        }
        .vol-text p{
            color:white;
            font-weight:100;
            padding-inline:10px;
            font-size:13px;;
        }
        .vol-text input{
            padding:6px;
            width:30vw;
            
            background: transparent;
            outline:none;
            border: 1px solid #c8c3c3;
            border-radius:4px #fff;
            /* box-shadow:; */
            /* font-size:5px; */

        }

        .vol-text::placeholder{
            color:red;
            font-size:10px;
        }
        .vol-text button{
            background-color:#D94A39;
            color:white;
            border:1px solid #D94A39;
            padding:6px;
            border-radius:2px;
        }
        .v-call{
           
            color: #fff;
            font-size:18px;
            /* background:#D94A39; */
            border-bottom:1px solid #f1f1f1;
            border-radius:4px;
            font-weight:500;
            outline:none;
        
            padding-inline: 6px;
        }

        @media screen and (max-width:40em){
          .vol-text p{
            color:white;
            font-weight:100;
            line-height: 1.6em;
            padding-inline:2px;
            font-size:12px;
        }  
        .vol-text input{
            padding:6px;
            width:60vw;
            
            background: transparent;
            outline:none;
            border: 1px solid #c8c3c3;
            border-radius:4px #fff;
            /* box-shadow:; */
            /* font-size:5px; */

        }

        .vol-text{
            
            /* filter:blur(0.2): */
            display:flex;
            justify-content:center;
            flex-direction:column;
           gap:8px;
           padding-block: 8%;
           align-items:center;
           padding-inline:8%;
        }
        }
    
    }
`



export default VolunteerPage