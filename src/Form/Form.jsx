import React, { useState } from "react";
import "./form.css";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { isToastIdValid } from "react-toastify/dist/utils";
// import PhoneInput from "react-phone-number-input";
toast.configure({
  bodyClassName: {
    backgroundColor: "blue",
    height: "500px",
    width: "100%",
  },
});
function Form() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [courses, setCourses] = useState("");
  const [additionalInformation, setadditionalInformation] = useState("");
  const [paymentOptions, setpaymentOptions] = useState("");
  // const [value, setValue] = useState();
  const [isLoading, setisLoading] = useState(false);
  const details = {
    firstName,
    lastName,
    email,
    phoneNumber,
    courses,
    additionalInformation,
    paymentOptions,
  };
  // const numberRegex = new RegExp("^[0-9]$");
  const RegisterStudent = async (payload) => {
    try {
      setisLoading(true);
      const response = await fetch(
        "https://tmacademy-email.tm-dev.xyz/register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const server = await response.json(() => {});

      console.log(server);
      if (server.status === true) {
        toast.success(server.message);
      } else if (server.error === true) {
        toast.error(server.message);
      }
      // else {
      //   toast.error(server.message);
      // }

      // if (server.message.errors) {
      //   toast.error(server.message.message);

      // }

      setisLoading(false);
    } catch (err) {
      // if (
      //   err ===
      //   "TypeError: Cannot read properties of undefined (reading 'errors')"
      // ) {
      //   alert("hey");
      //   toast.error(" server.message.message");
      // }
      console.log(err);
      setisLoading(false);
    }
  };

  // useEffect(() => {
  //   RegisterStudent();
  // }, []);

  // const toastId = React.useRef(null);
  const handler = (e) => {
    // if (!toast.isActive) {
    //   toastId.current();
    // } else {
    //   toast();
    // }
    e.preventDefault();

    RegisterStudent(details);
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
                FirstName <sup>*</sup>{" "}
              </label>{" "}
              <input
                required
                placeholder="John"
                type="text"
                onChange={(e) => setfirstName(e.target.value)}
              />
            </li>

            <li className="form-details">
              <label>
                LastName<sup>*</sup>
              </label>
              <input
                required
                placeholder="Doe"
                type="text"
                onChange={(e) => setlastName(e.target.value)}
              />
            </li>
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

          <div className="selectArea">
            <li className="form-details">
              <label>
                Courses <sup>*</sup>
              </label>{" "}
              <select
                // value={courses}
                onChange={(e) => setCourses(e.target.value)}
              >
                <option value="">select course</option>
                <option value="Backend_web_development">
                  Backend Web Development
                </option>
                <option value="Mobile_development">Mobile Development</option>
                <option value="Frontend_web_development">
                  Frontend Web Development
                </option>
              </select>
            </li>
            <li className="form-details">
              <label>
                Select Payment Option <sup>*</sup>
              </label>
              <select
                // value={courses}
                onChange={(e) => setpaymentOptions(e.target.value)}
              >
                <option value="">select payment option</option>
                <option value="Zero_cost">Zero-Cost</option>
                <option value="One_off_payment_with_discount">
                  One-off Payment
                </option>
                <option value="Installment_payment">
                  {" "}
                  Installment payment
                </option>
              </select>
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
      <ToastContainer
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
        theme="colored"
      />{" "}
    </>
  );
}

export default Form;
