import {Routes, Route, Link, NavLink, useParams, Outlet} from 'react-router-dom';
import CounterPage from '../pages/CounterPage';
import CountryNewsPage from '../pages/CountryNewsPage';
import TodoPage from "../pages/TodoPage";
import Counter from "./Counter/Counter";
import CountryNews from './CountryNews/CountryNews';
import Nav from './Nav/Nav';

const MainLayout = ( ) => {
  return <>
    <Nav />
    <div className="container">
      {/* content page */}
      <Outlet />
    </div>
  </>
}

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<h1>Home Page</h1>} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/country-news' element={<CountryNewsPage />} >
          <Route path=":lang" element={<CountryNews />} />
          {/* <Route path="ua" element={<Title title={"UA"} />} />
          <Route path="pl" element={<Title title={"PL"} />} />
          <Route path="fr" element={<Title title={"FR"} />} /> */}
        </Route>
      </Route>
    </Routes>
    
  );
};

export default App;
