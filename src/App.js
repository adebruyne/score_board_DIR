import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      scores: [
        {
          id: 1,
          name: "alice",
          score: 1001
        },
        {
          id: 2,
          name: "bob",
          score: 20
        },
        {
          id: 3,
          name: "carol",
          score: 500
        }
      ]
    };
  }
  render() {
    return <div className="App" />;
  }
}

export default App;
