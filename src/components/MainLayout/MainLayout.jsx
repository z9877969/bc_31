import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <div className="container">
        {/* content page */}
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MainLayout;
