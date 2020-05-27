import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLine,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export default class componentName extends Component {
  render() {
    return (
      <div className="social-media mt-5 pt-3">
        {/* facebook-icon. */}
        <a href="https://www.facebook.com/" className="facebook-icon pr-3">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        {/* instagram-icon */}
        <a href="https://www.instagram.com/" className="instagram-icon pr-3">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        {/* Line-icon */}
        <a
          href="https://chrome.google.com/webstore/detail/line/ophjlpahpchlmihnnnihgmmeilfjmjjc?hl=en"
          className="line-icon pr-3"
        >
          <FontAwesomeIcon icon={faLine} size="2x" />
        </a>
        {/* telegram-icon. */}
        <a href="https://web.telegram.org/" className="telegram-icon pr-3">
          <FontAwesomeIcon icon={faTelegram} size="2x" />
        </a>
      </div>
    );
  }
}
