import React from "react";
import logo from "../img/courses/logo.png";
import instagram from "../img/ig.png";
import tiktok from "../img/tiktok.png";
import twitter from "../img/tt.png";
import "./footer.css";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  console.log(date);
  return (
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
          <a href="#register">Terms & Conditions</a>
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
  );
};

export default Footer;
