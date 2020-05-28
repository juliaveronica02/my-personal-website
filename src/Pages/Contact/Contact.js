import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

export default class componentName extends Component {
  render() {
    return (
      // bagi dua colom untuk buat submit form dan keterangan lokasi
      <div className="container mt-5 mb-4" id="/contact">
        <h3 className="text-center">Contact Me</h3>
        <hr className="hr" />
        <br />

        <div className="row">
          <div className="col-md-8">
            <form action="/post" method="post">
              <input
                className="form-control"
                name="name"
                placeholder="Name..."
              />
              <br />
              <input
                className="form-control"
                name="phone"
                placeholder="Phone..."
              />
              <br />
              <input
                className="form-control"
                name="email"
                placeholder="E-mail..."
              />
              <br />
              <textarea
                className="form-control"
                name="text"
                placeholder="How can I help you?"
                style={{ height: "150px" }}
              ></textarea>
              <br />
              <input
                className="btn btn-outline-primary"
                type="submit"
                value="Submit"
              />
              <br />
              <br />
            </form>
          </div>
          <div className="col-md-4">
            {/* <b>Contact Me:</b> <br /> */}
            Phone: +62 85363617950
            <br />
            E-mail: <Link to="www.google.com">me@juliaveronica.com</Link>
            <br />
            <br />
            <br />
            <b>Address:</b>
            <br />
            Batam, Indonesia <br />
            Batam Center
            <br />
          </div>
        </div>
      </div>
    );
  }
}
