import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
// import { todo as todoData } from "../../data/todo";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useTodo } from "../../hooks/useTodo";
import { useContext } from "react";
import { IsLoadingContext } from "../../context/IsLoadingContext";

const TodoPage = () => {
  // const [todo, setTodo] = useLocalStorage("todo", todoData);
  const [filter, setFilter] = useLocalStorage("filter", "all");
  const { todo, addTodo, removeTodo, updateStatus } = useTodo(filter);

  const data = useContext(IsLoadingContext);

  console.log(data);

  // винесли в хук useTodo
  // const addTodo = useCallback(
  //   (newTodo) => {
  //     setTodo((prevTodo) => [...prevTodo, newTodo]);
  //   },
  //   [setTodo]
  // );

  // link - 1 -> link - 2
  // const removeTodo = useCallback(
  //   (id) => {
  //     setTodo((prevTodo) => prevTodo.filter((el) => el.id !== id));
  //   },
  //   [setTodo]
  // );

  // const updateStatus = useCallback(
  //   (id) => {
  //     setTodo((prev) =>
  //       prev.map((el) => (el.id !== id ? el : { ...el, isDone: !el.isDone }))
  //     );
  //   },
  //   [setTodo]
  // );

  // const filteredTodo = useMemo(() => {
  //   // console.log("inside useMemo");
  //   if (filter === "all") return todo;
  //   return todo.filter((el) => el.priority === filter);
  // }, [filter, todo]);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <ToDoForm addTodo={addTodo} />
      <button
        type="button"
        onClick={() => {
          data.setIsLoading();
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

// const mem = { uCb1: { value: "", fn: () => {} } };

// const useCb = (fn, arrI) => {
//   if (mem.uCb1 === JSON.stringify(arrI)) return mem.uCb1.fn;
//   mem.uCb1 = { value: JSON.stringify(arrI), fn: fn };
//   return fn;
// };
