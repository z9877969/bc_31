import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import NewsList from "../components/NewsList/NewsList";
import Paginator from "../components/Paginator/Paginator";
import SearchForm from "../components/SearchForm/SearchForm";
import { getSearchNewsApi } from "../utils/newsApi";

const SearchNewsPage = () => {
  //   const location = useLocation();
  const [search, setSearch] = useSearchParams();

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //   const search = new URLSearchParams(location.search);
  const query = search.get("query");
  const page = Number(search.get("page"));

  const updatePage = (actionType) => {
    actionType === "next" && setSearch({ query, page: page + 1 });
    actionType === "prev" && setSearch({ query, page: page - 1 });
  };

  useEffect(() => {
    if (query && page > 0) {
      setIsLoading(true);
      getSearchNewsApi(query, page)
        .then((news) => setNews(news))
        .catch((err) => console.log(err.message))
        .finally(() => setIsLoading(false));
    }
  }, [query, page]);

  return (
    <div>
      <SearchForm setSearch={setSearch} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        news.length > 0 && (
          <>
            <NewsList news={news} />
            <Paginator updatePage={updatePage} page={page} />
          </>
        )
      )}
    </div>
  );
};

export default SearchNewsPage;
