import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { GetRepos } from "../GetRepos";
import { Repositories } from "../Repositories";

import "./style.css";

export const Bio = ({
  showBio,
  userInfo,
  repos,
  starred,
  getUserRepos,
  getUserStarreds,
}) => {
  return (
    <div className="smart-container panel">
      {showBio && !!userInfo && (
        <div>
          <header className="header">
            <div className="header-bar"></div>
            <nav>
              <FaArrowLeft />
            </nav>
            <img
              src={userInfo.avatar_url}
              alt={userInfo.name}
              className="photo"
            />
            <div className="user-info">
              <h1>
                <a
                  href={`https://github.com/${userInfo.login}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {userInfo.name}
                </a>
              </h1>
              <h4>{userInfo.login}</h4>
              <p>{userInfo.bio}</p>
              <div className="social-info">
                <ul className="flex-container">
                  <li>
                    <span>Repositories</span>
                    <span>{userInfo.public_repos}</span>
                  </li>
                  <li>
                    <span>followers</span>
                    <span>{userInfo.followers}</span>
                  </li>
                  <li>
                    <span>following</span>
                    <span>{userInfo.following}</span>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <div>
            <GetRepos
              getUserRepos={getUserRepos}
              getUserStarreds={getUserStarreds}
            />
          </div>
          <div>
            {!!repos.length && (
              <Repositories
                className="repos"
                title="Repositories"
                repos={repos}
              />
            )}
            {!!starred.length && (
              <Repositories
                className="starred"
                title="Starreds"
                repos={starred}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
