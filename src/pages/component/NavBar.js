import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img
          src={process.env.PUBLIC_URL+"/Main_Icon.jpg"}
          alt="no img"
        />
        <p className={classes.c}>&#169;Unsplash</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            {" "}
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;
