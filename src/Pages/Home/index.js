import React from "react";
import { Bio } from "../../Components/Bio";
import { Search } from "../../Components/Search";
import { Welcome } from "../../Components/Welcome";

export const Home = ({
  showBio,
  userInfo,
  repos,
  starred,
  handleSearch,
  getUserRepos,
  getUserStarreds,
  message,
}) => {
  return (
    <div>
      <Welcome />
      <Search
        placeholder="Search a GitHub user"
        handleSearch={handleSearch}
      ></Search>
      <Bio
        showBio={showBio}
        userInfo={userInfo}
        repos={repos}
        starred={starred}
        getUserRepos={getUserRepos}
        getUserStarreds={getUserStarreds}
        message={message}
      />
    </div>
  );
};
