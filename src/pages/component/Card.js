import classes from "./Card.module.css";
export default function Card(props){
    return <main className={classes.card}>{props.children}</main>
}