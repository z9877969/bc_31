import { createContext, useCallback, useContext, useState } from "react";

const AddTodoContext = createContext();
const RemoveTodoContext = createContext();
const DataTodoContext = createContext();

export const useAddTodo = () => useContext(AddTodoContext);
export const useRemoveTodo = () => useContext(RemoveTodoContext);
export const useTodo = () => useContext(DataTodoContext);

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const add = useCallback((todo) => setTodo((prev) => [...prev, todo]), []);
  const remove = useCallback(
    (id) => setTodo((prev) => prev.filter((el) => el.id !== id)),
    []
  );
  return (
    <DataTodoContext.Provider value={todo}>
      <AddTodoContext.Provider value={add}>
        <RemoveTodoContext.Provider value={remove}>
          {children}
        </RemoveTodoContext.Provider>
      </AddTodoContext.Provider>
    </DataTodoContext.Provider>
  );
};

export default TodoProvider;
