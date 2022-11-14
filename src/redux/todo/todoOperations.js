import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "../../utils/firebaseApi";
import {
  addTodoFullfield,
  addTodoPending,
  addTodoRejected,
  getTodoFullfield,
  getTodoPending,
  getTodoRejected,
  removeTodoFullfield,
  removeTodoPending,
  removeTodoRejected,
  updateTodoStatusFullfield,
  updateTodoStatusPending,
  updateTodoStatusRejected,
} from "./todoSlice";

export const addTodo = (data) => (dispatch) => {
  dispatch(addTodoPending());

  addTodoApi(data)
    .then((todo) => dispatch(addTodoFullfield(todo)))
    .catch((err) => dispatch(addTodoRejected(err.message)));
};

export const getTodo = () => (dispatch) => {
  dispatch(getTodoPending());

  getTodoApi()
    .then((todo) => dispatch(getTodoFullfield(todo)))
    .catch((err) => dispatch(getTodoRejected(err.message)));
};

export const removeTodo = (id) => (dispatch) => {
  dispatch(removeTodoPending());

  removeTodoApi(id)
    .then(() => dispatch(removeTodoFullfield(id)))
    .catch((err) => dispatch(removeTodoRejected(err.message)));
};

export const updateStatusTodo = (id, status) => (dispatch) => {
  dispatch(updateTodoStatusPending());

  updateTodoStatusApi(id, status)
    .then((data) => dispatch(updateTodoStatusFullfield(data)))
    .catch((err) => dispatch(updateTodoStatusRejected(err.message)));
};

const innerFn = () => {}

const wrapperFn = () => innerFn