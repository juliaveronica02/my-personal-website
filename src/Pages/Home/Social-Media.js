import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default class componentName extends Component {
  render() {
    return (
      <div className="social-media pt-4">
        {/* facebook-icon. */}
        <a
          href="https://www.facebook.com/aaozora2/"
          className="facebook-icon pr-3"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        {/* instagram-icon */}
        <a
          href="https://www.instagram.com/juve2206/"
          className="instagram-icon pr-3"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        {/* LinkIn-icon */}
        <a
          href="https://www.linkedin.com/in/julia-veronica-672772195/"
          className="line-icon pr-3"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        {/* whatsapp-icon. */}
        <a
          href="https://api.whatsapp.com/send?phone=085363617950&text=&source=&data=&app_absent="
          className="telegram-icon pr-3"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
        {/* Github-icon */}
        <a
          href="https://github.com/juliaveronica02"
          className="github-icon pr-3"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    );
  }
}
