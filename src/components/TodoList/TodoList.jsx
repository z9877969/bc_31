import PropTypes from "prop-types";
import TodoListItem from "../TodoListItem/TodoListItem";
import s from "./TodoList.module.scss";

const TodoList = ({ todo, removeTodo, updateStatus, setContent }) => {
  // setState({a: 21, d: "qwe"})
  return (
    <ul className={s.container}>
      {todo.map((props) => (
        <TodoListItem
          key={props.id}
          {...props}
          removeTodo={removeTodo}
          updateStatus={updateStatus}
          setContent={setContent}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
