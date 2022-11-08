import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useTodo } from "../hooks/useTodo";

const TodoPage = () => {
  const [filter, setFilter] = useLocalStorage("filter", "all");
  const { todo, addTodo, removeTodo, updateStatus } = useTodo(filter);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <ToDoForm addTodo={addTodo} />
      <select name="filter" value={filter} onChange={handleChange}>
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      {todo.length > 0 && (
        <ToDoList
          todo={todo}
          updateStatus={updateStatus}
          removeTodo={removeTodo}
        />
      )}
    </>
  );
};

export default TodoPage;