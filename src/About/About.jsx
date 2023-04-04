import React from "react";
import aboutimage from "../img/R16.png";
import "./about.css";
import { Link } from "react-router-dom";
import halfcircle from "../img/half-circle.png";

const About = () => {
  return (
    <section className="about">
      <article className="about-desc">
        <h1 data-aos="fade-down" data-aos-duration="2000">
          About TM30 Academy
        </h1>

        <p data-aos="fade-up" data-aos-duration="2000">
        Teen Literacy Foundation (TLF) educates teenagers and youths across vital areas of life. Our organization provides a platform for awareness and nurturing young minds with every tool needed to become global leaders and change-makers within and outside their immediate environment. We advocate literacy, which by our definition, is not limited to the ability to read and write. Still, it includes awareness and the ability to make the right choices, accurate information voluntarily, and guided positive actions on various issues. We aim to take education beyond the walls of the classroom. We do this through a holistic approach to providing education, guidance, academic aptitudes, skills, and an inclusive and sustainable environment for target audiences. 
        </p>

        <Link to="/about-us" className="about-btn">
          <button>Read More</button>
        </Link>
      </article>
      <article className="about-image">
        <img src={aboutimage} alt="" className="student" />
        <img src={halfcircle} className="half-circle" alt="" />
      </article>
    </section>
  );
};

export default About;
