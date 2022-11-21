import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import { getTodo } from "../redux/todo/todoOperations";

const TodoPage = () => {
  const dispatch = useDispatch();

  const localId = useSelector((state) => state.auth.localId);

  useEffect(() => {
    localId && dispatch(getTodo());
  }, [dispatch, localId]);

  return (
    <>
      <ToDoForm />
      <TodoFilter />
      <ToDoList />
    </>
  );
};

export default TodoPage;
