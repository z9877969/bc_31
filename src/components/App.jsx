import { Suspense, lazy } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
// import CounterPage from "../pages/CounterPage";
// import CountryNewsPage from "../pages/CountryNewsPage";
// import SearchNewsPage from "../pages/SearchNewsPage";
// import TodoPage from "../pages/TodoPage";
// import CountryNews from "./CountryNews/CountryNews";
import Nav from "./Nav/Nav";

// const getWithLazy = (path) => lazy(() => import(path));

const CounterPage = lazy(() => import("../pages/CounterPage"));
const CountryNewsPage = lazy(() => import("../pages/CountryNewsPage"));
const SearchNewsPage = lazy(() => import("../pages/SearchNewsPage"));
const TodoPage = lazy(() => import("../pages/TodoPage"));
const CountryNews = lazy(() => import("./CountryNews/CountryNews"));

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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<h1>Home Page</h1>} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/country-news" element={<CountryNewsPage />}>
          <Route path=":lang" element={<CountryNews />} />
        </Route>
        <Route path="/search-news" element={<SearchNewsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
