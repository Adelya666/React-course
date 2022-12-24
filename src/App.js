import React, { Component } from "react";
import Count from "./Count";

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // handleClick=this.handleClick

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }
  componentDidMount() {
    console.log("component born");
    this.setState({ counter: 1 });
  }
  componentDidUpdate() {
    console.log("component update");
  }

  componentWillUnmount() {
    console.log("component die");
    
  }

  render() {
    return this.state.counter === 10 ? (
      <></>
    ) : (
      <div>
        <Count counter={this.state.counter} />

        <button onClick={this.handleClick}>Увеличить</button>
      </div>
    );
  }
}

export default Counter;
