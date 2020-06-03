import React from "react";
import axios from "axios";
import Card from "./components/Card.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/atoledo1")
      .then((response) => {
        console.log(response);
        this.setState({
          user: response.data,
        });
      })
      .catch((error) => {
        console.log("Error Message", error);
      });

    axios
      .get("https://api.github.com/users/atoledo1/followers")
      .then((response) => {
        this.setState({
          followers: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="user">
        <Card user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
