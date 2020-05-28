import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./Component/Navbar/navbar";
import Footer from "./Component/Footer/Footer";
import Home from "./Pages/Home/Content";
import Portofolio from "./Pages/Portofolio/Header";
import Contact from "./Pages/Contact/Contact";
import Hire from "./Pages/Hire/Hire";

function App() {
  return (
    <div className="App container">
      <Router>
        <Navbar />
        <Home />
        <div className="mt-5 pt-5">
          <Portofolio />
        </div>
        <Contact />
        <Hire />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
