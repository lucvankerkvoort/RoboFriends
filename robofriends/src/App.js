import React from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import Scroll from "./components/Scroll";
import { robots } from "./components/robots";
import "./App.css";

class App extends React.Component {
  state = {
    robots: robots,
    searchfield: "",
  };

  componentDidMount = () => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  };

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };
  render() {
    const { robots, searchfield } = this.state;
    const filterRobot = robots.filter((robot) => {
      console.log(robot.name);
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="App">
        <h1>RoboFriends</h1>
        <Search search={this.onSearchChange} />
        <Scroll>
          <Card robots={filterRobot} />
        </Scroll>
      </div>
    );
  }
}

export default App;
