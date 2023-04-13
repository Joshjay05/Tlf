import React from "react";
import logo from "../img/tlf.jpeg";
import instagram from "../img/ig.png";
import tiktok from "../img/tiktok.png";
import twitter from "../img/tt.png";
import "./footer.css";
import { FaBlogger} from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import {MdPlayArrow} from "react-icons/md"
import { AiOutlineMail } from "react-icons/ai"
import {MdVolunteerActivism} from "react-icons/md"
import {BiDonateHeart} from "react-icons/bi"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillNotification} from "react-icons/ai"
const Footer = () => {
  const date = new Date().getFullYear();
  console.log(date);
  return (
    <section className="foot">

      <article className="top-footer">
        <div className="tf-content">
          
          <p>Get in touch</p>
          <span className="git"><BiPhoneCall className="icon"/><strong></strong>+2348102265568</span>
          <span className="git"><AiOutlineMail className="icon"/> <strong className="mail"> teensliteracyfoundation@gmail  </strong></span>
          <span className="git"><BiPhoneCall className="icon"/> +2345678889</span>
         
         </div>
        <div  className="tf-content">
        
          <p>Quick links</p>
          <a className="q-links" href="http://"><BiPhoneCall  className="icon"/>Contact us</a>
          <a  className="q-links"href="http://"><MdVolunteerActivism className="icon"/>Volunteer</a>
          <a  className="q-links"href="http://"><BiDonateHeart className="icon"/>Donate</a>
          <a  className="q-links" href="http://"><FaBlogger className="icon"/>Blogs</a>
          <a className="q-links" href="http://"><AiFillNotification className="icon"/>Announcement</a>
          <a className="q-links" href="http://"><AiOutlineTwitter className="icon"/>tweets</a>
          
        </div>
        <div  className="tf-content">
          <p>Recent Post</p>
          <a href="/" className="post"><MdPlayArrow  className="icon"/> <li className="post-content"><span className="post-title">Title</span><span className="post-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quisquam.</span></li></a >
          <a href="/" className="post"><MdPlayArrow className="icon"/> <li className="post-content"><span className="post-title">Title</span><span className="post-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quisquam.</span></li></a >
          <a href="/" className="post"><MdPlayArrow className="icon"/> <li className="post-content"><span className="post-title">Title</span><span className="post-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quisquam.</span></li></a >
          </div>
        <div  className="tf-content">
          <p>Join a Newsletter</p>
          <label>Email</label>
          <input className="tf_input" placeholder="Email"/>
          <button className="tf-button">Subscribe</button>
        </div>
      </article>
    <div className="footer">
      <div className="left">
        <div>
          {" "}
          <img src={logo} className="logos" alt="" />
        </div>
      </div>
      <div className="middle">
        {" "}
        <li>
          <a href="#register">Support</a>
        </li>
        <li>
          <a href="#register" className="tc">Terms & Conditions</a>
        </li>
      </div>
      <div className="right">
        <a href="/">
          <a
            href="https://instagram.com/teensliteracyfoundation?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="" />{" "}
          </a>
          <a
            href="https://www.tiktok.com/@tlfcentral?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tiktok} className="tk" alt="" />{" "}
          </a>
          <a
            href="https://twitter.com/TlfCentral?s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={twitter} alt="" />
          </a>
        </a>
        <li className="at">@{date} tlf,net</li>
      </div>
    </div>
    </section>
  );
};

export default Footer;
