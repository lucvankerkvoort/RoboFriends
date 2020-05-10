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
    const filterRobot = this.state.robots.filter((robot) => {
      console.log(robot.name);
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="App">
        <h1>RoboFriends</h1>
        <Search search={this.onSearchChange} />
        <Card robots={filterRobot} />
      </div>
    );
  }
}

export default App;
