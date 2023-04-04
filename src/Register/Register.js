import React from "react";
import Form from "../Form/Form";
import "./register.css";

function Register() {
  return (
    <>
      <section className="registration">
        <article className="contact">
          <div>
            <h3> Contact Us</h3>
            <p>
              To get started please fill the contact form and you will be
              reached shortly.
            </p>
            <h5>Contact us via email</h5>

            <span>
              tlf@gmail.com
            </span>

         <div className="divider"></div>
            <h5>
              or call <strong> Isaac Oni</strong>
            </h5>

            <span>
              <h5>+2348102265568</h5>
            </span>
          </div>
        </article>
        <article className="registration-form">
          <Form />  
        </article>
        </section>
    </>
  );
}

export default Register;
