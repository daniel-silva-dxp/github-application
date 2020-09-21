import React from "react";

import "./style.css";

export const Repositories = ({ className, title, repos }) => {
  return (
    <div className={`${className}`}>
      <h4>{title}</h4>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.link} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
