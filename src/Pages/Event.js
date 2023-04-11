import React from 'react'
import "./event.css"
// import vol from "../img/vll.jpg"
import v1 from "../img/volunteer.jpg"
import v2 from "../img/vl.jpg"
import v3 from "../img/donations.jpg"
// import vimage from '../img/volun.jpg'

const Event = () => {
  return (
    <div>
{/*  */}
    <article className='vol-img'>
        <a href='/' className='vol-img_header'> 
        <p>Our Volunteers</p>
        <div className="divider"></div> </a>
        <div className="vol-image"><img src={v1} alt=""/>
        <img src={v2} alt=""/>
        <img src={v3} alt=""/></div>
    </article>
    {/*  */}
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
</div>
  )
}

export default Event