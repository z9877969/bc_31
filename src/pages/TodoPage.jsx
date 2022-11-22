import { useSelector } from "react-redux";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getIsTodoExist } from "../redux/todo/todoSelectors";

const TodoPage = () => {
  // const [filter, setFilter] = useLocalStorage("filter", "all");
  // const isTodoExist = useSelector(getIsTodoExist);

  // const handleChange = (e) => {
  //   setFilter(e.target.value);
  // };

  console.log("TodoPage");
  return (
    <>
      <ToDoForm />
      <TodoFilter />
      {/* {isTodoExist && <ToDoList />} */}
      <ToDoList />
    </>
  );
};

export default TodoPage;
