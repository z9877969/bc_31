import axios from "axios";

// /everything?q=bitcoin&apiKey=42ee593af8484a5a82756cb35b09ccd

const API_KEY = "42ee593af8484a5a82756cb35b09ccd6";
axios.defaults.baseURL = "https://newsapi.org/v2";

export const getTopNewsApi = (lang) => {
  return axios
    .get(`/top-headlines`, {
      params: {
        country: lang,
        apiKey: API_KEY,
      },
    })
    .then((res) => res.data.articles);
};

export const getSearchNewsApi = (q, page) => {
  return axios
    .get("/everything", {
      params: {
        q,
        page,
        pageSize: 20,
        apiKey: API_KEY,
      },
    })
    .then((res) => res.data.articles);
};
