import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../redux/auth/authSelectors";

const MainNavigate = () => {
  const isAuth = useSelector(getIsAuth);

  return <Navigate to={isAuth ? "/todo" : "/login"} />;
};

export default MainNavigate;
