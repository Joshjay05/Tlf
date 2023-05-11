import React, { useState } from "react";
import "./form.css";
// import "react-phone-number-input/style.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { isToastIdValid } from "react-toastify/dist/utils";
// import PhoneInput from "react-phone-number-input";
// toast.configure({
//   bodyClassName: {
//     backgroundColor: "blue",
//     height: "500px",
//     width: "100%",
//   },
// });
function Form() {
  const [firstName, setfirstName] = useState("");
  // const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const [additionalInformation, setadditionalInformation] = useState("");
 
  const [isLoading, setisLoading] = useState(false);
  const details = {
    firstName,
    // lastName,
    email,
    phoneNumber,
    additionalInformation,
  
  };
  
  const handler = (e) => {
 details();
    e.preventDefault();

setisLoading(false);
  };

  const additionalInformationHandler = (e) => {
    setadditionalInformation(e.target.value);
  };

  return (
    <>
      <form>
        <section className="forms">
          <div className="names">
            <li className="form-details">
              <label>
                Name <sup>*</sup>{" "}
              </label>{" "}
              <input
                required
                placeholder="Johnxxxxxx"
                type="text"
                onChange={(e) => setfirstName(e.target.value)}

                className="name-input"
                
              />
            </li>

            {/* <li className="form-details">
              <label>
     .form-details           LastName<sup>*</sup>
              </label>
              <input
                required
                placeholder="Doe"
                type="text"
                onChange={(e) => setlastName(e.target.value)}
              />
            </li> */}
          </div>

          <div className="contact-details">
            <li className="form-details">
              <label for="email">
                Email Address<sup>*</sup>
              </label>
              <input
                required
                placeholder="johndoe@gmail.com"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li className="form-details">
              <label for="phone">
                Phone Number<sup>*</sup>
              </label>
              <input
                // type="number"
                required
                placeholder="Enter phone number"
                value={phoneNumber}
                onInput={(e) => {
                  setphoneNumber(e.target.value);
                }}

                // onChange={(e) => setphoneNumber(e.target.value)}
              />
            </li>
          </div>

        
          <div className="form-details">
            <label>Additional Information(Optional)</label>
            <textarea
              className="comment"
              value={additionalInformation}
              onChange={additionalInformationHandler}
            ></textarea>
          </div>
        </section>
        <button onClick={handler} className="btN" type="submit">
          {isLoading ? "processing..." : "Submit"}
        </button>
      </form>
      {/* <ToastContainer
        limit={1}
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" */}
      {/* />{" "} */}
    </>
  );
}

export default Form;
