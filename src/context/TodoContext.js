import { createContext, useCallback, useContext, useState } from "react";

const MainContext = createContext();
const AddTodoContext = createContext();
const RemoveTodoContext = createContext();
const DataTodoContext = createContext();

export const useAddTodo = () => useContext(AddTodoContext);
export const useRemoveTodo = () => useContext(RemoveTodoContext);
export const useTodo = () => useContext(DataTodoContext);

const MainProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const add = useCallback((todo) => setTodo((prev) => [...prev, todo]), []);
  const remove = useCallback(
    (id) => setTodo((prev) => prev.filter((el) => el.id !== id)),
    []
  );

  return (
    <MainContext.Provider value={{ todo, add, remove }}>
      {children}
    </MainContext.Provider>
  );
};

const ShareProvider = ({ children }) => {
  const { todo, add, remove } = useContext(MainContext);
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

const TodoProvider = ({ children }) => {
  return (
    <MainProvider>
      <ShareProvider>{children}</ShareProvider>
    </MainProvider>
  );
};

export default TodoProvider;
