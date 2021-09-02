import { useRef } from "react";

function Form(props) {
  //ref vars
  const inputNameRef = useRef();
  const inputEmailRef = useRef();
  const inputMobileRef = useRef();
  const inputQueryRef = useRef();
 // const inputImageRef = useRef();
  //form handler
  function formHandler(event) {
    event.preventDefault();
    //extract value
    const name = inputNameRef.current.value,
      email = inputEmailRef.current.value,
      mobile = inputMobileRef.current.value,
      query = inputQueryRef.current.value,
      //   image = inputImageRef.current.value;
      //form set
      /* 
    let formData = new FormData();
    formData.append("name", name);
    formData.append("mail", email);
    formData.append("mobile", mobile);
    formData.append("query", query);
    formData.append("image", image);
    */
      formData = {
        name: name,
        mobile: mobile,
        email: email,
        query: query,
      };
    //
    return props.data(formData);
    //
  }

  return (
    <form id="myForm" name="myForm" onSubmit={formHandler}>
      <label htmlFor="name">Enter Your Name</label> <br />
      <input
        type="text"
        id="name"
        defaultValue="eg. Jhon"
        ref={inputNameRef}
      />{" "}
      <br />
      <label htmlFor="mail">Enter Your Email</label>
      <br />
      <input
        type="email"
        id="mail"
        defaultValue="eg. jhon@xyz.com"
        ref={inputEmailRef}
      />{" "}
      <br />
      <label htmlFor="mobile">Enter Your Contact Number</label>
      <br />
      <input
        type="number"
        id="mobile"
        defaultValue="eg. 99XXXXXXXX"
        pattern="^\\d{10}$"
        ref={inputMobileRef}
      />
      <br />
      <label htmlFor="ques">Write your Query</label>
      <br />
      <textarea rows="8" id="ques" ref={inputQueryRef} />
      <br />
     
      <button>Submit</button>
    </form>
  );
}
export default Form;
