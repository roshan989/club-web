import classes from "./css/HomePage.module.css";
//import HoverForm from "./component/HoverForm";
function HomePage() {
  return (
    <div>
      <div className={classes.bd}>
        Hai to All Visitors!
        <br />
        We're Gorakpur Karate Club.
        <br />
        <div id={classes.id1}>Trainer --{">"} Deelip Sir.</div>
      </div>
      <p>Our Affiliations  ---   ___________________</p>
     
    </div>
  );
}
export default HomePage;
