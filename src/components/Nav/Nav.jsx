import { useDispatch } from "react-redux";
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

  return (
    <div style={wrapperStyle}>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/counter">Counter</NavItem>
      <NavItem to="/todo">Todo</NavItem>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default Nav;
