import axios from "axios";

axios.defaults.baseURL = "https://bc-31-5d787-default-rtdb.firebaseio.com";

export const addTodoApi = (form) => {
  form.isDone = false;
  return axios
    .post("/todo.json", form)
    .then((res) => ({ ...form, id: res.data.name }));
};

export const getTodoApi = () => {
  return axios
    .get("/todo.json")
    .then((res) =>
      res.data === null
        ? []
        : Object.entries(res.data).map(([id, data]) => ({ id, ...data }))
    );
};

export const removeTodoApi = (id) => {
  return axios.delete(`/todo/${id}.json`);
};

export const updateTodoStatusApi = (id, status) => {
  return axios
    .patch(`/todo/${id}.json`, { isDone: !status })
    .then((res) => ({ ...res.data, id }));
};