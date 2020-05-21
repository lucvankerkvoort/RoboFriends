import React from "react";
import { connect } from "react-redux";
import Card from "./components/Card";
import Search from "./components/Search";
import Scroll from "./components/Scroll";
import ErrorBoundry from "./components/ErrorBoundry";
import "./App.css";

import { setSearchField, requestRobots } from "./actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends React.Component {
  componentDidMount = () => {
    this.props.onRequestRobots();
  };

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filterRobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="App">
        <h1>RoboFriends</h1>
        <Search search={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <Card robots={filterRobot} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
