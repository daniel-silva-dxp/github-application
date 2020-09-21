import React from "react";
import Office from "../../Assets/office.svg";

import "./style.css";

export const Welcome = () => {
  return (
    <div className="panel welcome-box flex-container">
      <div className="welcome-title">
        <h1>Welcome!</h1>
        <p>Search a GitHub user</p>
      </div>
      <div className="welcome-image">
        <img src={Office} alt="Home Office" />
      </div>
    </div>
  );
};
