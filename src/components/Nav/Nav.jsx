import { NavItem } from "./Nav.styled";

const wrapperStyle = {
  display: "flex",
  gap: "25px",
  justifyContent: "center",
  marginBottom: "20px",
};

const Nav = () => {
  return (
    <div style={wrapperStyle}>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/counter">Counter</NavItem>
      <NavItem to="/todo">Todo</NavItem>
      <NavItem to="/tabs">Tabs</NavItem>
    </div>
  );
};

export default Nav;
