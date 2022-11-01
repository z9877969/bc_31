import axios from "axios";

axios.defaults.baseURL = "https://newsapi.org/v2";
const API_KEY = "42ee593af8484a5a82756cb35b09ccd6";

export const searchNewsApi = (query, page = 1) => {
  return axios
    .get("/everything", {
      params: {
        q: query,
        apiKey: API_KEY,
        pageSize: 6,
        page,
      },
    })
    .then((res) => res.data);
};
