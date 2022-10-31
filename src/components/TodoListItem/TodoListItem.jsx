import { Component } from "react";
import clsx from "clsx";
import s from "../TodoList/TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";

class TodoListItem extends Component {
  state = {
    count: 0,
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prev) => ({ count: prev.count + 1 }));
      console.log("count");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  //   openModal = (props) => {
  //     this.props.setContent(props);
  //   };

  render() {
    const { descr, id, date, isDone, removeTodo, updateStatus, setContent } =
      this.props;
    return (
      <li
        key={id}
        className={s.toDoItem}
        onClick={() => setContent(<h1>TodoListItem</h1>)}
      >
        <p className={s.date}>{date}</p>
        <p className={s.date}>Count - {this.state.count}</p>

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
        <button onClick={(event) => removeTodo(id)} className={s.todoBtn}>
          <svg className={s.icon}>
            <use href={sprite + "#icon-trash"}></use>
          </svg>
        </button>
      </li>
    );
  }
}

export default TodoListItem;
