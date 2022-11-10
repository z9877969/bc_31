import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";

const CounterPage = lazy(() => import("../pages/CounterPage"));
const TodoPage = lazy(() => import("../pages/TodoPage"));

const App = () => {
  return (
    <>
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
