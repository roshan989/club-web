import { useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./HoverForm.css";
function HoverForm() {
  const history = useHistory();
  const inputNameRef = useRef();
  const inputEmailRef = useRef();
  const inputMobileRef = useRef();
  const inputAgeRef = useRef();
 
  function formHandler(e) {
    e.preventDefault();
     const formData = {
       name: inputNameRef.current.value,
       email: inputEmailRef.current.value,
       mobile: inputMobileRef.current.value,
       age: inputAgeRef.current.value,
     };
    fetch(
      "https://club-app-6e825-default-rtdb.europe-west1.firebasedatabase.app/submitForm.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <div className={classes.form_popup} id="subForm">
      <form className={classes.form_container} onSubmit={formHandler}>
        <label htmlFor="name">Enter Applicant|Your Name</label> <br />
        <input
          type="text"
          id="name"
          defaultValue="eg. Jhon"
          ref={inputNameRef}
        />{" "}
        <br />
        <label htmlFor="mail">Enter Applicant|Your Email</label>
        <br />
        <input
          type="email"
          id="mail"
          defaultValue="eg. jhon@xyz.com"
          ref={inputEmailRef}
        />{" "}
        <br />
        <label htmlFor="mobile">Enter Your|Applicant Contact Number</label>
        <br />
        <input
          type="number"
          id="mobile"
          defaultValue="eg. 99XXXXXXXX"
          pattern="^\\d{10}$"
          ref={inputMobileRef}
        />
        <br />
        <label htmlFor="age">choose your age</label>
        <br />
        <input
          type="radio"
          id="u18"
          name="age"
          value="HTML"
          ref={inputAgeRef}
        />
        <label for="u18">Under 18</label>
        <br />
        <input type="radio" id="a18" name="age" value="CSS" ref={inputAgeRef} />
        <label for="a18">Above 18</label>
        <br />
        <br />
        <button type="submit" className="btn">Submit</button>
        <button type="submit" className="btn cancel" onclick="closeForm()">
          Close
        </button>
      </form>
    </div>
  );
}
export default HoverForm;
