import React from "react";
import Card from "./components/Card";
import { robots } from "./components/robots";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="card-section">
          {robots.map((robot, i) => {
            return <Card robot={robot} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
