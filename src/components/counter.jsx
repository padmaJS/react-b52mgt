import React, { Component } from "react";

class Counter extends Component {
  state = {
    timer: 0
  };
  starter = () => {
    this.timeStart = setInterval(() => this.setState({timer : this.state.timer + 1}),1000);
  }
  stopper = () => {
    clearInterval(this.timeStart);
  }
  reset = () => {
    this.setState({timer : 0});
    
  }
  render() {
    return (
      <div>
        <h1>{this.state.timer}</h1>
        <button onClick = {this.starter} disabled = {this.state.timer != 0}>Start</button>
        <button onClick = {this.stopper}>Stop</button>
        <button onCLick = {this.reset} disabled = {this.state.timer === 0}>Reset</button>
      </div>
    );
  }
}

export default Counter;
