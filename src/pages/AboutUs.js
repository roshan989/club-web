import AboutCard from "./component/AboutCard";
import classes from "./css/About.module.css";
function AboutUsPg() {
  return (
    <AboutCard>
      <center>
        {" "}
        <img
          className="image"
          src={process.env.PUBLIC_URL + "sir dp-modified.png"}
          alt="dp"
        />
      </center>
      <div className={classes.aboutP}>
        I am deelip.
        <br />
        I am II Dan Black Belt Holder in Karate.
        <br />
        Come and Join me and Built your strength.
        <br />
        Also be Happy 😊
      </div>
    </AboutCard>
  );
}
export default AboutUsPg;
