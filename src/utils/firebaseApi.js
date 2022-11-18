import axios, { Axios } from "axios";

const API_KEY = "AIzaSyCYXh8tCc5qA2iY2UgmtOD9hnnfSGsYnr4";

const url = {
  AUTH: "https://identitytoolkit.googleapis.com/v1",
  DB: "https://bc-31-5d787-default-rtdb.firebaseio.com",
};

axios.defaults.baseURL = "https://bc-31-5d787-default-rtdb.firebaseio.com";
// "https://<DATABASE_NAME>.firebaseio.com/users/localId/todo.json?auth=idToken"

export const addTodoApi = ({ form, localId, idToken }) => {
  form.isDone = false;
  return axios
    .post(`/users/${localId}/todo.json`, form, {
      baseURL: url.DB,
      params: {
        auth: idToken,
      },
    })
    .then((res) => ({ ...form, id: res.data.name }));
};

export const getTodoApi = ({ localId, idToken }) => {
  return axios
    .get(`/users/${localId}/todo.json`, {
      baseURL: url.DB,
      params: {
        auth: idToken,
      },
    })
    .then((res) =>
      res.data === null
        ? []
        : Object.entries(res.data).map(([id, data]) => ({ id, ...data }))
    );
};

export const removeTodoApi = ({ id, localId, idToken }) => {
  return axios.delete(`/users/${localId}/todo/${id}.json`, {
    baseURL: url.DB,
    params: {
      auth: idToken,
    },
  });
};

export const updateTodoStatusApi = ({ localId, id, status, idToken }) => {
  return axios
    .patch(
      `/users/${localId}/todo/${id}.json`,
      { isDone: !status },
      {
        baseURL: url.DB,
        params: {
          auth: idToken,
        },
      }
    )
    .then((res) => ({ ...res.data, id }));
};

export const registerUserApi = (userData) => {
  return axios
    .post(
      `/accounts:signUp`,
      { ...userData, returnSecureToken: true },
      {
        baseURL: url.AUTH,
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data: { email, idToken, localId, refreshToken } }) => ({
      email,
      idToken,
      localId,
      refreshToken,
    }));
};
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
export const loginUserApi = (userData) => {
  return axios
    .post(
      "/accounts:signInWithPassword",
      { ...userData, returnSecureToken: true },
      {
        baseURL: url.AUTH,
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data: { email, idToken, localId, refreshToken } }) => ({
      email,
      idToken,
      localId,
      refreshToken,
    }));
};

// https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]
// {"idToken":"[FIREBASE_ID_TOKEN]"}
export const getCurUserApi = (idToken) => {
  return axios
    .post(
      "/accounts:lookup",
      { idToken },
      {
        baseURL: url.AUTH,
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => {
      const { localId, email } = data.users[0];
      return { localId, email };
    });
};

// "https://<DATABASE_NAME>.firebaseio.com/users/ada/name.json?auth=<ID_TOKEN>"
