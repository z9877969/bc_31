import { useToggle, useList } from "react-use";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoData } from "../../data/todo";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoPage = () => {
  // const [todo, setTodo] = useLocalStorage("todo", todoData);
  const [todo, { filter: filterFn, push }] = useList(todoData);
  const [filter, setFilter] = useLocalStorage("filter", "all");
  const [isLoading, setIsLoading] = useToggle(false);

  const addTodo = (newTodo) => {
    // setTodo((prevTodo) => [...prevTodo, newTodo]);
    push(newTodo)
  };

  const removeTodo = (id) => {
    // setTodo((prevTodo) => prevTodo.filter((el) => el.id !== id));
  };

  const updateStatus = (id) => {
    // setTodo((prev) =>
    //   prev.map((el) => (el.id !== id ? el : { ...el, isDone: !el.isDone }))
    // );
  };

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredTodo = () => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  };

  const filteredTodo = getFilteredTodo();

  // useEffect(() => {
  //   localStorage.setItem("todo", JSON.stringify(todo));
  // }, [todo]);

  return (
    <>
      <ToDoForm addTodo={addTodo} />
      {isLoading && <h1>Loading...</h1>}
      <button
        type="button"
        onClick={() => {
          setIsLoading();
        }}
      >
        Toggle loading
      </button>
      <select name="filter" value={filter} onChange={handleChange}>
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      {filteredTodo.length > 0 && (
        <ToDoList
          todo={filteredTodo}
          updateStatus={updateStatus}
          removeTodo={removeTodo}
        />
      )}
    </>
  );
};

export default TodoPage;