import classes from "./AboutCard.module.css";
function AboutCard(props){
return <main className={classes.aboutCard}>{props.children}</main>
}export default AboutCard;