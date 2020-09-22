import React from "react";

import "./style.css";

export const Preloader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};
