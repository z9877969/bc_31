import axios from "axios";

axios.defaults.baseURL = "https://bc-31-5d787-default-rtdb.firebaseio.com/";

const transformDataToArr = (data) =>
  data ? Object.entries(data).map(([id, data]) => ({ id, ...data })) : [];

export const addTransactionApi = (transaction, transType) => {
  return axios
    .post(`/transactions/${transType}.json`, transaction) // {name: 65465saf45as65f4}
    .then(({ data }) => ({ ...transaction, id: data.name }));
};

export const getTransactionsApi = (transType) => {
  return axios
    .get(`/transactions/${transType}.json`)
    .then(({ data }) => transformDataToArr(data));
};
