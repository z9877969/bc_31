// import {NavLink} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { NavItem } from "./Nav.styled";

const Nav = () => {
  const location = useLocation();

  console.log("location :>> ", location);
  return (
    <div style={{ display: "flex", gap: "25px", justifyContent: "center" }}>
      {/* {pathname: "/", search: "", hash: "", state: null} */}
      <NavItem to="/">Home</NavItem>
      {/* {pathname: "/counter", search: "", hash: "", state: null} */}
      <NavItem to="/counter">Counter</NavItem>
      {/* {pathname: "/todo", search: "", hash: "", state: null} */}
      <NavItem to="/todo">Todo</NavItem>
      {/* {pathname: "/country-news", search: "", hash: "", state: "curentLocation"} */}
      <NavItem to="/country-news" state={location}>
        CountryNews
      </NavItem>
      <NavItem to="/search-news">SearchNews</NavItem>
    </div>
  );
};

export default Nav;
