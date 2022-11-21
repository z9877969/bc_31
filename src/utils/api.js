import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

export const addColumnApi = (title) => {
  const column = { title, tasksList: [] };
  return axios.post("/column", column).then(({ data }) => data);
};
