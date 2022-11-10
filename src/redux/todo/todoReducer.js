import { combineReducers } from "redux";
import { todo } from "../../data/todo";
import {
  TODO_ADD,
  TODO_CHANGE_FILTER,
  TODO_REMOVE,
  TODO_UPDATE,
} from "./todoConstants";

const itemsReducer = (state = todo, action) => {
  // {type: "todo/add", payload: newTodo}
  switch (action.type) {
    case TODO_ADD:
      return [...state, action.payload];
    // {type: "todo/remove", payload: id}
    case TODO_REMOVE:
      return state.filter((el) => el.id !== action.payload);
    case TODO_UPDATE:
      return state.map((el) =>
        el.id !== action.payload ? el : { ...el, isDone: !el.isDone }
      );
    default:
      return state;
  }
};

const filterReducer = (state = "all", { type, payload }) => {
  switch (type) {
    case TODO_CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

// {
//   items: [],
//   filter: "all"
// }

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todoReducer;
