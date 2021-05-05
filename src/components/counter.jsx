import React, { Component } from "react";

class Counter extends Component {
  state = {
    seconds: 0,
    minutes: 0
  };
  starter = () => {
    this.timeStart = setInterval(() => this.setState({seconds : this.state.seconds + 1}),1000);
  }
  stopper = () => {
    clearInterval(this.timeStart);
  }
  reset = () => {
    clearInterval(this.timeStart);
    this.setState({seconds : 0});   
  }
  showSeconds(){
    if(this.state.seconds < 10){
        return "0" + this.state.seconds;
      }
  }
  showMinutes(){
    
  }
  render() {
    return (
      <div>
        <h1>{this.showMinutes()}:{this.showSeconds()}</h1>
        <button onClick = {this.starter}>Start</button>
        <button onClick = {this.stopper}>Stop</button>
        <button onClick = {this.reset} disabled = {this.state.seconds === 0}>Reset</button>
      </div>
    );
  }
}

export default Counter;
