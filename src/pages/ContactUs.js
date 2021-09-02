import FormCard from "./component/FormCard";
import classes from "./css/ContactUs.module.css";
import FormSubmit from "./FormSubmit";
function ContactUsPg() {
  return (
    <div>
      <FormCard>
        <section className={classes.contact}>
          Hai here you can contact me!
          <br />
          <div className={classes.ids}>
            My Email --{">"} dkmartialart@gmail.com
            <br />
            My Contact Number --{">"} XXXXXXXXXX
          </div>
        </section>
      </FormCard>
      <FormCard>
        <section className={classes.query}>
          Send me a Query if you have any!
          <FormSubmit />
        </section>
      </FormCard>
    </div>
  );
}
export default ContactUsPg;

