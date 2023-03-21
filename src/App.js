import React, { Component } from "react";
// import img from "./images/med.jpg";
import "./App.css";
import Me from "./images/med.jpg";

export default class App extends Component {
  state = {
    person: {
      fullName: "Mohamed Charfeddine",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: Me,
      profession: "Developer",
    },
    shows: false,
    mountedAt: new Date(),
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const currentTime = new Date();
    const elapsedTime = Math.floor((currentTime - this.state.mountedAt) / 1000);

    return (
      <div>
        <button onClick={this.toggleShow}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.shows && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Me" />
            <p>{this.state.person.profession}</p>
            <p>Component mounted {elapsedTime} seconds ago</p>
          </div>
        )}
      </div>
    );
  }
}
