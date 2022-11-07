// import {NavLink} from 'react-router-dom';
import { NavItem } from './Nav.styled';

// const navLinkStyle = {padding: "20px 30px", fontSize: "20px", cursor: "pointer", border: "1px solid red"}
// const getActiveStyle = ({isActive}) => ({ color: isActive ? "red" : "black"})

const Nav = () => {
    return ( <div style={{display: "flex", gap: "25px", justifyContent: "center"}}>
    <NavItem to="/">Home</NavItem>
    <NavItem to="/counter">Counter</NavItem>
    <NavItem to="/todo">Todo</NavItem>
    <NavItem to="/country-news">CountryNews</NavItem>
    </div> );
}
 
export default Nav;