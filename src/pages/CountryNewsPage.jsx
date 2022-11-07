import {NavLink, Outlet} from 'react-router-dom';



const CountryNewsPage = () => {
    return (<>
         <ul>
        <li>
            <NavLink to="ua">UA</NavLink>
        </li>
        <li>
        <NavLink to="pl">PL</NavLink>
        </li>
        <li>
        <NavLink to="fr">FR</NavLink>
        </li>
        <li>
        <NavLink to="us">US</NavLink>
        </li>
    </ul> 
    <Outlet />
    </>
    
    );
}
 
export default CountryNewsPage;