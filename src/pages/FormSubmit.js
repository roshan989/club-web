import Form from "./component/Form";
import { useHistory } from "react-router-dom";
function FormSubmit() {
  const history = useHistory();
  function fetchHandler(formData) {
    fetch(
      "https://club-app-6e825-default-rtdb.europe-west1.firebasedatabase.app/formData.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => {
        history.replace("/contact");
      })
      .catch((err) => {
        console.log("error");
      });
  }

  return <Form data={fetchHandler} />;
}
export default FormSubmit;
