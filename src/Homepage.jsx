import React from "react";
import Header from "./Header/Header";
import student from "./img/student.png";
import president from "./img/president.jpg";
import Register from "./Register/Register"
import "./home.css";
import Footer from "./Footer/Footer";
import Events from "./Pages/Events"
import Volunteer from "./Pages/Volunteer";
import Donate from "./Pages/Donate";

const Homepage = () => {
  return (
    <div>
      <Header />
      <section className="call">
        <div className="t-desc">
          <h1>What we do and how we do it</h1>
          <p>
            Our organization is primarily a Community Education, Intervention,
            and Development group. We create awareness through campaigns,
            lectures, student conferences, competition community workshops, and
            talk shows to provide the public with information on issues of our
            interest. These campaigns are expected to provide adequate
            knowledge, change attitudes, and promote lifestyle behavioral
            changes through practices. In addition, our organization conducts
            extensive research and survey to gather relevant data which could
            serve as input to solution development by all stakeholders. Our
            research methodology involves a significant percentage of collating
            primary data from the fields in the communities. Therefore, we
            interview teenagers, youths, teachers, parents, relevant
            institutions, community organizations, and all stakeholders. In
            addition, we carry out intervention programs as our contribution to
            the solutions developed. Such intervention programs include but are
            not limited to physical activities, competitions, sports, and games
            for health, with prizes to be won. We also involve relevant
            stakeholders and partner with other organizations, corporate bodies
            and individuals to achieve these goals to ensure the services and
            products for impacting the community lifestyle towards
            nation-building. For effectiveness, we set up communities, groups,
            and clubs in various schools and build inclusive and sustainable
            relationships between our organization and school administrators. We
            also measure our impact through other feedback mechanisms, such as
            reports from school management and administrators, parents,
            teachers, and community members where the influence of our
            organization and programs has spread to.
          </p>
        </div>

        <div className="image-desc">
          <img src={student} alt="" />
        </div>
      </section>

      {/* president's corner */}
      <section className="call">
        <div className="t-desc">
          <h2>The President's Corner</h2>
          <p>
            My name is Isaac Oluwadamilare ONI; I founded Teens Literacy
            Foundation (TLF) in 2022, even though the organization started as
            the Build Them Initiative (BTI) in 2019. I am also a graduate of
            Pharmacy from Obafemi Awolowo University, Nigeria. I am interested
            in research, Health Promotion, and education of vulnerable
            populations, especially concerning preventive health and precision
            medicine, people development, and policy development and execution.
            With an extraordinary passion for young people, I believe educating
            them, parents, teachers, and stakeholders provide a pathway for
            achieving sustainable development goals. I have served in various
            leadership positions up to the post-college level and have
            volunteering experience with multiple organizations. My unique areas
            of strength include critical thinking, self-initiative,
            decision-making, teamwork, and project execution. My plans include
            building the organization I lead to become a global player in
            advocacy, people development, and program execution in line with
            Sustainable Development Goals. My vision is clear: Building an Army
            of Leaders across different sectors with the right education tool!
          </p>
        </div>
        <div className="p-image">
          <img src={president} alt="" />
        </div>
      </section>
<Events/>
{/* Volunteer */}

<Volunteer/>
      <Donate/>
<Register/>
      <Footer />
    </div>
  );
};

export default Homepage;
