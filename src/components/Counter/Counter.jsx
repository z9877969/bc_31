import React from "react";
import s from "./Counter.module.css";

class Counter extends React.Component {
  state = {
    count: 20,
    // a: 5,
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 5 }));
  };

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 10 }));
  };

  reset = () => {
    this.setState({ count: 20 });
  };

  // fn = (propName) => {
  //   // this.setState((prev) => ({ [propName]: prev[propName] + 1 }));
  //   // "a"
  //   // this.setState((prev) => ({ a: prev["a"] + 1 }));
  // };

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Counter</h1>
        <p className={s.count}>{this.state.count}</p>
        <div className={s.btnsWrapper}>
          <button className={s.btn} onClick={this.decrement} type="button">
            -
          </button>
          <button onClick={this.reset} className={s.btn} type="button">
            0
          </button>
          <button onClick={this.increment} className={s.btn} type="button">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
