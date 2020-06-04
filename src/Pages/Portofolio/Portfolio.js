import React, { Component } from "react";
import "./Portfolio.css";
export default class componentName extends Component {
  render() {
    return (
      <div className="container mt-4 mb-4" id="/portofolio">
        <h3 className="text-center">Portfolio</h3>
        <hr className="portfolio" />
        <div className="row pl-2">
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                {/* <img src={Photography} alt="..." /> */}
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Photography</h4>
                {/* <div class="text-ellipsis">
                  <span class="text-concat">
                    Lorem ipsum dolor sit amet, nibh eleifend cu his, porro
                    fugit mandamus no mea. Sit tale facete voluptatum ea, ad
                    sumo altera scripta per, eius ullum feugait id duo. At
                    nominavi pericula persecuti ius, sea at sonet tincidunt, cu
                    posse facilisis eos. Aliquid philosophia contentiones id
                    eos, per cu atqui option disputationi, no vis nobis vidisse.
                    Eu has mentitum conclusionemque, primis deterruisset est in.
                  </span>
                </div> */}
              </div>
              {/* <div className="mb-2 d-flex justify-content-center">
                <button className="btn btn-primary" style={{ width: "55%" }}>
                  ReadMore >>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
