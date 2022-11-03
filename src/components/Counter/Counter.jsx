import React, { useState } from "react";
import s from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(25);

  const decrement = () => {
    setCount((prev) => prev - 10); // -> webApi (-25 - 10)
    // setCount((prev) => prev - 10); // -> webApi (-25 - 10)
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button className={s.btn} onClick={decrement} type="button">
          -
        </button>
        <button onClick={() => setCount(25)} className={s.btn} type="button">
          0
        </button>
        <button
          onClick={() => setCount((prev) => prev + 15)}
          className={s.btn}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
