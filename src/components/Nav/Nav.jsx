import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/lang/langSlice";
import { NavItem } from "./Nav.styled";

const wrapperStyle = {
  display: "flex",
  gap: "25px",
  justifyContent: "center",
  marginBottom: "20px",
};

const Nav = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang);
  console.log("lang :>> ", lang);

  return (
    <div style={wrapperStyle}>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/counter">Counter</NavItem>
      <NavItem to="/todo">Todo</NavItem>
      <select
        name="lang"
        value={lang}
        onChange={(e) => dispatch(changeLang(e.target.value))}
      >
        <option value="en">EN</option>
        <option value="ua">UA</option>
      </select>
    </div>
  );
};

export default Nav;
