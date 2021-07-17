import React from "react";
import "../styles/popup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <FontAwesomeIcon
          size="10x"
          className="icons-times"
          color="black"
          icon={faTimes}
          className="close-icon"
          onClick={props.handleClose}
        />
        <h1>{props.content}</h1>
      </div>
    </div>
  );
};

export default Popup;
