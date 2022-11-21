import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../redux/auth/authSelectors";

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(getIsAuth);
  return !isAuth ? children : <Navigate to="/default" />;
};

export default PublicRoute;
