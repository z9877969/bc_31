import TodoFilter from "../components/TodoFilter/TodoFilter";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";

const TodoPage = () => {
  return (
    <>
      <ToDoForm />
      <TodoFilter />
      <ToDoList />
    </>
  );
};

export default TodoPage;
