import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getTodo } from "../redux/todo/todoOperations";
import { getIsTodoExist } from "../redux/todo/todoSelectors";

const TodoPage = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useLocalStorage("filter", "all");
  // const isTodoExist = useSelector(getIsTodoExist);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <>
      <ToDoForm />
      <TodoFilter filter={filter} handleChange={handleChange} />
      <ToDoList />
    </>
  );
};

export default TodoPage;
