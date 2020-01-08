import React from "react";
import "./styles.css";
import About from "./About";
import Nav from "./Nav";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />

        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);
