import React from "react";

class ErrorBoundry extends React.Component {
  state = {
    hasError: false,
  };
  componentDidCatch = (error, info) => {
    this.setState({ hasError: true });
  };
  render() {
    const { hasError } = this.state;
    return hasError ? (
      <h1>Oops... Something went wrong</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
