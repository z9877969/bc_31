import { createSelector } from "@reduxjs/toolkit";

export const getTodo = (state) => state.todo.items;
export const getIsTodoExist = (state) => getTodo(state).length > 0;
export const getTodoFilter = (state) => state.todo.filter;

// export const getFilteredTodo = (state) => {
    // console.log("without_createSelector");
//   const items = getTodo(state); // linkItems
//   const filter = getTodoFilter(state);

//   if (filter === "all") return items;
//   return items.filter((el) => el.priority === filter); // l1 | l2 | l3
// };

export const getFilteredTodo = createSelector(
  [getTodo, getTodoFilter],
  (items, filter) => {
    if (filter === "all") return items;
    return items.filter((el) => el.priority === filter); // l1 | l2 | l3
  }
);
