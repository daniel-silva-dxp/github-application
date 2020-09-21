import React from "react";
import { Button } from "../Button";
import { FaFolderOpen, FaStar } from "react-icons/fa";

import "./style.css";

export const GetRepos = ({ getUserRepos, getUserStarreds }) => {
  return (
    <div className="flex-container">
      <Button btnColor="btn-red" handleClick={getUserRepos}>
        <FaFolderOpen />
      </Button>
      <Button btnColor="btn-red" handleClick={getUserStarreds}>
        <FaStar />
      </Button>
    </div>
  );
};
