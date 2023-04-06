import React from 'react'
import "./event.css"
// import Footer from "../Footer"
import styled from 'styled-components'
import vol from "../img/vll.jpg"
import v1 from "../img/volunteer.jpg"
import v2 from "../img/vl.jpg"
import v3 from "../img/donations.jpg"

const Events = () => {
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
 
        <div className='event-head'>
<h1 className='event-title'> Upcoming Events</h1>
        <div className="divider"></div>
        <h3>2023</h3>   
        </div>

        <section className='event-section'>
        <article className="event">
            {/* date */}
            <div className="event-date">
                <span className="day">28</span>
                <span className="month">April</span>
            </div>
            {/* event description */}
            
            <div className="event-description">
                <h4>Some Title Here</h4>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa mollitia officia fugit vitae reprehenderit eius distinctio aperiam? Vitae, sapiente.</p>
            <pre className="event-timing"> 10:am</pre></div>

        </article>

        {/*  */}
        <article className="event">
            {/* date */}
            <div className="event-date">
                <span className="day">28</span>
                <span className="month">April</span>
            </div>
            {/* event description */}
            
            <div className="event-description">
                <h4>Some Title Here</h4>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing n nisi iusto error odit perferendis eaque, fugit vitae reprehenderit eius distinctio aperiam? Vitae, sapiente.</p>
            <pre className="event-timing"> 10:am</pre></div>

        </article>
        {/*  */}
        </section>

        <article className='vol-img'>
            <a href='/' className='vol-img_header'> 
            <p>Our Volunteers</p>
            <div className="divider"></div> </a>
            <div className="vol-image"><img src={v1} alt=""/>
            <img src={v2} alt=""/>
            <img src={v3} alt=""/></div>
        </article>

        {/* <Footer/> */}
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

        

        /* .events{
            padding:30px 10px;
        } */
        /* .event-title{
            color:#333333;
            text-align:center    
           } */

    }
`



export default Events