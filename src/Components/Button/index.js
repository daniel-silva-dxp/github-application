import React from "react";

import "./style.css";

export const Button = ({ children, btnColor, handleClick }) => {
  return (
    <div>
      <button className={`btn btn-small ${btnColor}`} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};
