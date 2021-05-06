import React, { Component } from "react";

class Counter extends Component {
  state = {
    timerOff : false,
    seconds: 0,
    minutes: 0
  };
  starter = () => {
    this.timeStart = setInterval(() => this.setState({seconds : this.state.seconds + 1}),1000);
    if(!this.state.timerOff){
      this.setState({timerOff : true})
    }
  }
  stopper = () => {
    if(this.state.timerOff){
      this.setState({timerOff : false})
    }
    clearInterval(this.timeStart);
  }
  reset = () => {
    clearInterval(this.timeStart);
    this.setState({timerOff : false})
    this.setState({seconds : 0});   
  }
  showSeconds(){
    if(this.state.seconds >= 60){
      this.setState({seconds : 0});
      this.setState({minutes : this.state.minutes + 1});
    }
    if(this.state.seconds < 10){
      return "0" + this.state.seconds;
    }else{
      return this.state.seconds;
    }
  }
  showMinutes(){
    if(this.state.minutes < 10){
      return "0" + this.state.minutes;
    }else{
      return this.state.minutes;
    }
  }
  render() {
    return (
      <div>
        <h1>{this.showMinutes()}:{this.showSeconds()}</h1>
        <button onClick = {this.starter} disabled={this.state.timerOff}>Start</button>
        <button onClick = {this.stopper} disabled={!this.state.timerOff}>Stop</button>
        <button onClick = {this.reset} disabled = {this.state.seconds === 0}>Reset</button>
      </div>
    );
  }
}

export default Counter;
