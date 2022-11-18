import { lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { getCurUser } from "../redux/auth/authOperations";
import { getIsAuth } from "../redux/auth/authSelectors";
import MainLayout from "./MainLayout/MainLayout";

const CounterPage = lazy(() => import("../pages/CounterPage"));
const TodoPage = lazy(() => import("../pages/TodoPage"));

const App = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(getIsAuth);

  useEffect(() => {
    dispatch(getCurUser());
  }, [dispatch]);

  return isAuth ? (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<h1>Home Page</h1>} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};

export default App;
