import React, { Component } from "react";
import "./Portfolio.css";
import WeatherApp from "./../../Images/WeatherApp.png"
import trishop from "./../../Images/trishop.png"
import chevrolet from "./../../Images/chevrolet.png"
export default class componentName extends Component {
  render() {
    return (
      <div className="container mt-4 mb-4" id="/portofolio">
        <h3 className="text-center">Portfolio</h3>
        <hr className="portfolio" />
        <div className="row mx-5">
              {/* weather app */}
          <div className="col-md-4 mb-3 pb-0">
          <div className="card">
            {/* <div className="card" style={{ width: "15rem" }}> */}
              <div className="rounded-circle pb-0">
                <img src={WeatherApp} alt="..." />
              </div>
              <div className="card-body pb-0">
                <h4 className="card-title text-center">Weather App</h4>
                <div class="text-ellipsis">
                  <span class="text-concat">
                    {/* Lorem ipsum dolor sit amet, nibh eleifend cu his, porro
                    fugit mandamus no mea. Sit tale facete voluptatum ea, ad
                    sumo altera scripta per, eius ullum feugait id duo. At
                    nominavi pericula persecuti ius, sea at sonet tincidunt, cu
                    posse facilisis eos. Aliquid philosophia contentiones id
                    eos, per cu atqui option disputationi, no vis nobis vidisse.
                    Eu has mentitum conclusionemque, primis deterruisset est in. */}
                    This is my portfolio which is using open weather api. This app build using HTML, CSS, 
                    Bootstrap and Javascript. 
                  </span>
                </div>
              </div>
              <div className="mb-2 d-flex justify-content-center mt-2 mt-1">
                <button className="btn btn-primary" style={{ width: "25%" }}>
                  <a  className="text-light" href="https://weatherapp-julia.netlify.app/">
                    Link
                  </a>
                </button>
              </div>
            </div>
          </div>
            {/* trishop */}
            <div className="col-md-4 mb-3 pb-0">
            <div className="card">
            {/* <div className="card" style={{ width: "15rem" }}> */}
              <div className="rounded-circle pb-0">
                <img src={trishop} alt="..." />
              </div>
              <div className="card-body pb-0">
                <h4 className="card-title text-center">Tri-shop</h4>
                <div class="text-ellipsis">
                  <span class="text-concat">
                    {/* Lorem ipsum dolor sit amet, nibh eleifend cu his, porro
                    fugit mandamus no mea. Sit tale facete voluptatum ea, ad
                    sumo altera scripta per, eius ullum feugait id duo. At
                    nominavi pericula persecuti ius, sea at sonet tincidunt, cu
                    posse facilisis eos. Aliquid philosophia contentiones id
                    eos, per cu atqui option disputationi, no vis nobis vidisse.
                    Eu has mentitum conclusionemque, primis deterruisset est in. */}
                    It is e-commerce project. This app build by using React.js and Node.js. 
                    My role as a backend, on this project.
                  </span>
                </div>
              </div>
              <div className="mb-2 d-flex justify-content-center mt-2 mt-1">
                <button className="btn btn-primary" style={{ width: "25%" }}>
                  <a  className="text-light" href="https://tri-shop.netlify.app/#/">
                    Link
                  </a>
                </button>
              </div>
            </div>
            </div>
            {/* Chevrolet */}
            <div className="col-md-4 mb-3 pb-0">
            <div className="card">
            {/* <div className="card" style={{ width: "15rem" }}> */}
              <div className="rounded-circle pb-0">
                <img src={chevrolet} alt="..." />
              </div>
              <div className="card-body pb-0">
                <h4 className="card-title text-center">Company Profile</h4>
                <div class="text-ellipsis">
                  <span class="text-concat">
                    {/* Lorem ipsum dolor sit amet, nibh eleifend cu his, porro
                    fugit mandamus no mea. Sit tale facete voluptatum ea, ad
                    sumo altera scripta per, eius ullum feugait id duo. At
                    nominavi pericula persecuti ius, sea at sonet tincidunt, cu
                    posse facilisis eos. Aliquid philosophia contentiones id
                    eos, per cu atqui option disputationi, no vis nobis vidisse.
                    Eu has mentitum conclusionemque, primis deterruisset est in. */}
                    Chevrolet is a company profile. I track this website to be my portfolio.
                    At here I using HTML, CSS and Bootstrap.
                  </span>
                </div>
              </div>
              <div className="mb-2 d-flex justify-content-center mt-2 mt-1">
                <button className="btn btn-primary" style={{ width: "25%" }}>
                  <a  className="text-light" href="https://companyproject-julia.netlify.app/#">
                    Link
                  </a>
                </button>
              </div>
            </div>
            </div>
            {/* Test */}
            <div className="col-md-4 mb-3 pb-0">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle pb-0">
                <img src={trishop} alt="..." />
              </div>
              <div className="card-body pb-0">
                <h4 className="card-title text-center">Tri-shop</h4>
                <div class="text-ellipsis">
                  <span class="text-concat">
                    {/* Lorem ipsum dolor sit amet, nibh eleifend cu his, porro
                    fugit mandamus no mea. Sit tale facete voluptatum ea, ad
                    sumo altera scripta per, eius ullum feugait id duo. At
                    nominavi pericula persecuti ius, sea at sonet tincidunt, cu
                    posse facilisis eos. Aliquid philosophia contentiones id
                    eos, per cu atqui option disputationi, no vis nobis vidisse.
                    Eu has mentitum conclusionemque, primis deterruisset est in. */}
                    It is e-commerce project. This app build by using React.js and Node.js. 
                    My role as a backend, on this project.
                  </span>
                </div>
              </div>
              <div className="mb-2 d-flex justify-content-center mt-2 mt-1">
                <button className="btn btn-primary" style={{ width: "25%" }}>
                  <a  className="text-light" href="https://tri-shop.netlify.app/#/">
                    Link
                  </a>
                </button>
              </div>
            </div>
            </div>
            {/*  */}
            
        </div>
      </div>
    );
  }
}
