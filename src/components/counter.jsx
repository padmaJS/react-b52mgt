import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0
  };
  updateCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decreaseCounter = () => {
    this.state.counter > 0
      ? this.setState({ counter: this.state.counter - 1 })
      : this.setState({ counter: 0 });
  };
  resetCounter = () =>{
    this.setState({counter: 0});
  }
  count() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
  render() {
    return (
      <div>
        <h1>
          You've pressed the button {this.count()} time
          {this.state.counter > 1 && "s"}
        </h1>
        <button onClick={this.updateCounter}>Increase</button>
        <button onClick={this.decreaseCounter}>Decrease</button>
        <button onClick={this.resetCounter}>Reset</button>
      </div>
    );
  }
}

export default Counter;
