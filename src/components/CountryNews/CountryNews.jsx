import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getTopNewsApi } from "../../utils/newsApi";

const newsName = {
  us: "US",
  ua: "UA",
  fr: "FR",
  pl: "PL",
};

const CountryNews = () => {
  const { lang } = useParams();

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // if(!lang) return;
    const getTopNews = async () => {
      setIsLoading(true);
      try {
        const news = await getTopNewsApi(lang);
        setNews(news);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTopNews();
  }, [lang]);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <h2>{newsName[lang]} News</h2>
      <ul>
        {news.map((el) => (
          <li>
            <a href={el.url} target="_blank" rel="noopener noreferrer">
              {el.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CountryNews;
