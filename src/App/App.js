import React, { Component } from "react";
import { Home } from "../Pages/Home";
import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      userInfo: null,
      repos: [],
      starreds: [],
      message: "Search a GitHub user!",
    };
  }

  getGitHubApiUrl(username, type) {
    const user = username ? `/${username}` : "";
    const typeInt = type ? `/${type}` : "";

    return `https://api.github.com/users${user}${typeInt}`;
  }

  getDataGitHubUser(e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;

    const headers = new Headers();
    const header = {
      method: "GET",
      headers: headers,
      mode: "cors",
      cache: "default",
    };

    if (keyCode === ENTER) {
      if (value) {
        this.setState({ show: true });
        fetch(this.getGitHubApiUrl(value), header)
          .then((data) => {
            if (!data.ok)
              this.setState({
                show: false,
                userInfo: null,
                repos: [],
                starreds: [],
                message: data.statusText,
              });
            return data.json();
          })
          .then((data) => {
            this.setState({
              userInfo: {
                name: data.name,
                login: data.login,
                avatar_url: data.avatar_url,
                bio: data.bio,
                public_repos: data.public_repos,
                followers: data.followers,
                following: data.following,
              },
              repos: [],
              starred: [],
              message: data.message,
            });
          });
      } else {
        this.setState({
          show: false,
          userInfo: null,
          repos: [],
          starred: [],
        });
      }
    }
  }

  getUserRepos(type) {
    const login = this.state.userInfo.login;
    fetch(this.getGitHubApiUrl(login, type))
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          [type]: data.map((repo) => {
            return {
              name: repo.name,
              id: repo.id,
              link: repo.html_url,
            };
          }),
        });
      });
  }

  render() {
    return (
      <div className="container">
        <Home
          showBio={this.state.show}
          userInfo={this.state.userInfo}
          repos={this.state.repos}
          starred={this.state.starred}
          handleSearch={(e) => this.getDataGitHubUser(e)}
          getUserRepos={() => this.getUserRepos("repos")}
          getUserStarreds={() => this.getUserRepos("starred")}
          message={this.state.message}
        />
      </div>
    );
  }
}
