import React, { Component } from "react";

export default class Count extends Component {
  constructor(props){
    super(props)
    this.state={
      title: ","
    }

  }
  render() {
    return (
      <>
        <p>Значение счетчика: {this.props.counter}</p>
      </>
    );
  }
}
