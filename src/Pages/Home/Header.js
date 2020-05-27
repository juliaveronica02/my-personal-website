import React, { Component } from "react";
import "./Header.css";
import Me from "../../Images/1.jpeg";
import SocialMedia from "./Social-Media";

export default class componentName extends Component {
  render() {
    return (
      <div>
        <div className="bg">
          <div className="container pt-5 d-flex justify-content-center">
            <div className="row bg-pic">
              <div className="profile pt-3">
                <img src={Me} alt="profile" />
              </div>
              <div className="col-md-6 mx-5 my-3 text-center">
                <h2 className="margin mt-5 text-decoration-underline">
                  Julia Veronica
                </h2>
                <hr className="hr" />
                <p>
                  I'am Julia Veronica..I currently hunt programming job. I want
                  to improve my programming like making a website. I have
                  background programming but it was C#. Now I join Glints X
                  Impact Byte "Full Stack Developer Javascript".
                </p>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
