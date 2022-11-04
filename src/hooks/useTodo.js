import { useLocalStorage } from "./useLocalStorage";
import { todo as todoData } from "../data/todo";
import { useCallback, useMemo } from "react";

export const useTodo = (filter) => {
  const [todo, setTodo] = useLocalStorage("todo", todoData);

  const addTodo = useCallback(
    (newTodo) => {
      setTodo((prevTodo) => [...prevTodo, newTodo]);
    },
    [setTodo]
  );

  const removeTodo = useCallback(
    (id) => {
      setTodo((prevTodo) => prevTodo.filter((el) => el.id !== id));
    },
    [setTodo]
  );

  const updateStatus = useCallback(
    (id) => {
      setTodo((prev) =>
        prev.map((el) => (el.id !== id ? el : { ...el, isDone: !el.isDone }))
      );
    },
    [setTodo]
  );

  const filteredTodo = useMemo(() => {
    // console.log("inside useMemo");
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }, [filter, todo]);

  return { todo: filteredTodo, addTodo, removeTodo, updateStatus };
};
