import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const NavItem = styled(NavLink)`
padding: 20px 30px; 
fontSize: 20px; 
cursor: pointer;
border: 1px solid red;

&.active {
  color: red;  
}
`