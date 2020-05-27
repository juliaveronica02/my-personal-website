import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Component/Navbar/navbar";
import Footer from "./Component/Footer/Footer";
import Home from "./Pages/Home/Content";
import Portofolio from "./Pages/Portofolio/Header";

function App() {
  return (
    <div className="App container">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/portofolio" component={Portofolio} />
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
