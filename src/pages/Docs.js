import React from "react";
import image from "../assets/images/image.jpg";

export default function Docs(props) {
  return (
    <div className="main-content">
      <div className="main-content-header">
        <div>
          <h1>Docs</h1>
        </div>

        <div className="header-actions">
          <button className="header-action-button">
            <i className="fas fa-ellipsis-h" />
          </button>
          <img className="header-action-img" src={image} />
        </div>
      </div>

      <div />
    </div>
  );
}
