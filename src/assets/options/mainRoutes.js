import { lazy } from "react";

const CounterPage = lazy(() => import("../../pages/CounterPage"));
const TodoPage = lazy(() => import("../../pages/TodoPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage"));

export const mainRoutes = [
  {
    path: "/counter",
    private: true,
    component: CounterPage,
  },
  {
    path: "/todo",
    private: true,
    component: TodoPage,
  },
  {
    path: "/default",
    private: true,
    component: () => null,
  },
  {
    path: "/login",
    private: false,
    component: LoginPage,
  },
  {
    path: "/register",
    private: false,
    component: RegisterPage,
  },
];
