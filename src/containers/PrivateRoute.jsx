import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../redux/auth/authSelectors";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(getIsAuth);
  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;