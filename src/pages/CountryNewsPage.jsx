import { Suspense } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const containerStyle = {
  width: "1000px",
  margin: "0 auto",
};

const listStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  margin: "0 auto",
  padding: "30px",
};

const CountryNewsPage = () => {
  const location = useLocation();

  return (
    <div style={containerStyle}>
      <Link to={location.state}>GoBack</Link>
      <ul style={listStyle}>
        <li>
          <NavLink to="ua" state={location.state}>
            UA
          </NavLink>
        </li>
        <li>
          <NavLink to="pl" state={location.state}>
            PL
          </NavLink>
        </li>
        <li>
          <NavLink to="fr" state={location.state}>
            FR
          </NavLink>
        </li>
        <li>
          <NavLink to="us" state={location.state}>
            US
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default CountryNewsPage;
