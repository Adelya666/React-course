import React, { Component } from "react";
import Count from "./Count";
import List from "./List";

class Counter extends React.Component {
  state = {
    value:""
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // handleClick=this.handleClick

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }
  changetext(event){

 
this.setState({
  value: event.target.value
})    
  }
  

  render() {
    return  (
      <>
      <List/>
      <form onSubmit={(event)=>{
        event.preventDefault()
      }}>

        <input  ref={(ip)=>{
          this.input=ip
        }} onChange={(event)=>{
          this.changetext(event)
        }} value={this.state.value}>
        
      
        
        </input>
        <button disabled={this.state.value.includes("реакт")?true :false }>
          send
        </button>
        <button onClick={()=>{this.input.focus()}}>
          focus on innput
        </button>
         </form>
      </>
    
   
    );
  }
}

export default Counter;
