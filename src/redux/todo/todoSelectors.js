export const getTodo = (state) => state.todo.items;
export const getIsTodoExist = (state) => getTodo(state).length > 0;
export const getTodoFilter = (state) => state.todo.filter;
