const NewsList = ({ news }) => {
  return (
    <ul>
      {news.map((el) => (
        <li>
          <a href={el.url} target="_blank" rel="noopener noreferrer">
            {el.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
