import { useSelector, useDispatch } from "react-redux";
import {
  counterIncrement,
  counterDecrement,
  counterReset,
} from "../../redux/counter/counterActions";
import s from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => {
    return state.counter;
  });

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button
          className={s.btn}
          onClick={() => dispatch(counterDecrement(10))}
          type="button"
        >
          -10
        </button>
        <button
          className={s.btn}
          onClick={() => dispatch(counterDecrement(20))}
          type="button"
        >
          -20
        </button>
        <button
          onClick={() => dispatch(counterReset())}
          className={s.btn}
          type="button"
        >
          0
        </button>
        <button
          onClick={() => dispatch(counterIncrement(25))}
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
