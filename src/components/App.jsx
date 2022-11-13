import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import sprite from "../assets/icons/sprite.svg";

const CounterPage = lazy(() => import("../pages/CounterPage"));
const TodoPage = lazy(() => import("../pages/TodoPage"));

const App = () => {
  return (
    <>
      {/* <select name="" id="">
        <option value="1">
          <svg style={{ width: "15px", height: "15px" }}>
            <use href={sprite + "#icon-cart"}></use>
          </svg>
          item
        </option>
      </select> */}
      {/* <input type="text" name="" defaultValue={"654"} readOnly /> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
