import { useDispatch, useSelector } from "react-redux";
import { getIsAuth } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authSlice";
import { NavItem } from "./Nav.styled";

const wrapperStyle = {
  display: "flex",
  gap: "25px",
  justifyContent: "center",
  marginBottom: "20px",
};

const Nav = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(getIsAuth);

  return (
    <div style={wrapperStyle}>
      <NavItem to="/">Home</NavItem>
      {isAuth ? (
        <>
          <NavItem to="/counter">Counter</NavItem>
          <NavItem to="/todo">Todo</NavItem>
          <button type="button" onClick={() => dispatch(logOut())}>
            Logout
          </button>
        </>
      ) : (
        <>
          <NavItem to="/login">Login</NavItem>
          <NavItem to="/register">Register</NavItem>
        </>
      )}
    </div>
  );
};

export default Nav;
