import NavBar from "./NavBar";
import SocialConn from "./SocialConn";
import classes from "./Layout.module.css";
function Layout(props) {
  return (
    <div>
      <NavBar />
      <main className={classes.main}>{props.children}</main>{" "}
      <footer>
        <SocialConn />
      </footer>
    </div>
  );
}
export default Layout;
