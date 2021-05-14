import "./App.css";
import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "pure-css3-animated-border/css/animated-border/animated-border.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Apropos from "./pages/Apropos";
import Services from "./pages/Services";
import Product from "./pages/Product";

import ProductByType from "./pages/ProductByType";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import ProductDetail from "./pages/ProductDetail";
import Projets from "./pages/Projets";
import ProjetDetail from "./pages/ProjetDetail";
import ContactUs from "./pages/ContactUs";
import ServiceItemDetail from "./Components/ServiceItemDetail";
import SserviceDesc from "./Components/SserviceDesc";
function App() {
  return (
    <Router>
      <Layout>
        {" "}
        <Route path="/" exact component={HomePage} />
        <Route path="/apropos" exact component={Apropos} />
        <Route path="/services" exact component={Services} />
        <Route path="/product" exact component={Product} />
        <Route path="/catservices/:id" exact component={ServiceItemDetail} />
        <Route path="/service/:id" exact component={SserviceDesc} />
        <Route path="/product/:id" exact component={ProductByType} />
        <Route path="/detailProduct/:id" exact component={ProductDetail} />
        <Route path="/projects" exact component={Projets} />
        <Route path="/projects/:id" exact component={ProjetDetail} />
        <Route path="/contactus" exact component={ContactUs} />
      </Layout>
    </Router>
  );
}

export default App;
