import "./App.css";
import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "pure-css3-animated-border/css/animated-border/animated-border.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Layout>
        {" "}
        <Route path="/" exact component={HomePage} />
      </Layout>
    </Router>
  );
}

export default App;
