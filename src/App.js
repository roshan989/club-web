import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/Gallery";
import ContactUsPg from "./pages/ContactUs";
import AboutUsPg from "./pages/AboutUs";
import Layout from "./pages/component/Layout";
function App() {
  return (
    <div>
      {" "}
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>{" "}
          <Route path="/contact">
            <ContactUsPg />
          </Route>{" "}
          <Route path="/about">
            <AboutUsPg />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
