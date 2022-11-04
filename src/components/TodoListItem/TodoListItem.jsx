import { useState, useRef, useEffect, useContext } from "react";
import clsx from "clsx";
import s from "../TodoList/TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import { IsLoadingContext } from "../../context/IsLoadingContext";
import { ModalContext } from "../../context/ModalContext";
import { useBgColorContext } from "../../context/BgColorContext";

const TodoListItem = ({
  descr,
  id,
  date,
  isDone,
  removeTodo,
  updateStatus,
  idx,
}) => {
  const data = useContext(IsLoadingContext);
  const setModalComponent = useContext(ModalContext);
  const value = useBgColorContext();

  const [timer, setTimer] = useState(0);

  const intervalIdRef = useRef(null);
  const itemElRef = useRef(null);

  const startTimer = () => {
    intervalIdRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const finishTimer = () => {
    clearInterval(intervalIdRef.current);
  };

  useEffect(() => {
    startTimer();

    return () => {
      finishTimer();
    };
  }, []);

  return (
    <li key={id} className={s.toDoItem} ref={itemElRef}>
      {data.isLoading && <h1>Loading...</h1>}
      <button
        type="button"
        onClick={() => {
          setModalComponent(<h1>ListItemComponent</h1>);
        }}
      >
        OpenModal
      </button>
      <button
        type="button"
        onClick={() => {
          value.setColor("#" + idx + idx + "a" + idx);
        }}
      >
        ChangeBgColor
      </button>
      <p className={s.date}>{date}</p>
      <p className={s.date}>Timer - {timer}</p>
      <button type="button" onClick={startTimer}>
        Start timer
      </button>
      <button type="button" onClick={finishTimer}>
        Finish timer
      </button>
      <p className={clsx(s.descr, isDone && s.isDone)}>{descr}</p>
      <label className={s.status}>
        <input
          type="checkbox"
          onChange={() => updateStatus(id)}
          name="status"
          checked={isDone}
        />
        Done
      </label>
      <button onClick={() => removeTodo(id)} className={s.todoBtn}>
        <svg className={s.icon}>
          <use href={sprite + "#icon-trash"}></use>
        </svg>
      </button>
    </li>
  );
};

export default TodoListItem;
