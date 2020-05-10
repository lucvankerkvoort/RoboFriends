import React from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import { robots } from "./components/robots";
import "./App.css";

class App extends React.Component {
  state = {
    robots: robots,
    searchfield: "",
  };

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };
  render() {
    const { robots } = this.state;
    return (
      <div className="App">
        <h1>RoboFriends</h1>
        <Search search={this.onSearchChange} />
        <Card robots={robots} />
      </div>
    );
  }
}

export default App;
