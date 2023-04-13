import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import aboutImage from "../img/mission.png";

const About = () => {
  AOS.init();
  return (
    <section className="about">
      <article className="about-desc">
        <h1 data-aos="fade-down" data-aos-duration="2000">
          About Teens Literacy Foundation
        </h1>

        <p data-aos="fade-up" data-aos-duration="2000">
          Teen Literacy Foundation (TLF) educates teenagers and youths across
          vital areas of life. Our organization provides a platform for
          awareness and nurturing young minds with every tool needed to become
          global leaders and change-makers within and outside their immediate
          environment. We advocate literacy, which by our definition, is not
          limited to the ability to read and write. Still, it includes awareness
          and the ability to make the right choices, accurate information
          voluntarily, and guided positive actions on various issues. We aim to
          take education beyond the walls of the classroom. We do this through a
          holistic approach to providing education, guidance, academic
          aptitudes, skills, and an inclusive and sustainable environment for
          target audiences.
        </p>
        <Link to="/about-us" className="about-btn" >About Us</Link>
        
      </article>
      <article className="about-image">
        <img src={aboutImage} alt="" className="student" />
      </article>
    </section>
  );
};

export default About;
