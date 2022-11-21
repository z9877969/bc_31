import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { mainRoutes } from "../assets/options/mainRoutes";
import PrivateRoute from "../containers/PrivateRoute";
import PublicRoute from "../containers/PublicRoute";
import { getCurUser } from "../redux/auth/authOperations";
import MainLayout from "./MainLayout/MainLayout";
import MainNavigate from "./MainNavigate";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurUser()); // update userInfo
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<h1>Home Page</h1>} />
        {mainRoutes.map((el) =>
          el.private ? (
            <Route
              key={el.path}
              path={el.path}
              element={
                <PrivateRoute>
                  <el.component />
                </PrivateRoute>
              }
            />
          ) : (
            <Route
              key={el.path}
              path={el.path}
              element={
                <PublicRoute>
                  <el.component />
                </PublicRoute>
              }
            />
          )
        )}
        <Route path="*" element={<MainNavigate />} />
      </Route>
      {/* <Route
        path="/counter"
        element={
          <PrivateRoute>
            <CounterPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/todo"
        element={
          <PrivateRoute>
            <TodoPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      /> 
      <Route
        path="/register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      /> 
      */}
    </Routes>
  );
};

export default App;
