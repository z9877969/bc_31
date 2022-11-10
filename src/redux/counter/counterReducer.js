import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from "./counterConstants";

const counterReducer = (state = 50, action) => {
  // { type: "counter/decrement", payload: 10 }
  switch (action.type) {
    case COUNTER_DECREMENT:
      return state - action.payload;
    case COUNTER_INCREMENT:
      return state + action.payload;
    case COUNTER_RESET:
      return action.payload;
    default:
      return state;
  }
};

export default counterReducer;
