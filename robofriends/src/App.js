import React from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import { robots } from "./components/robots";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>RoboFriends</h1>
      <Search />
      <Card robots={robots} />
    </div>
  );
};

export default App;
