import React from "react";
import Card from "./components/Card";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="card-section">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
