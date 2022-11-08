import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import s from "./SearchForm.module.scss";

const SearchForm = ({ setSearch }) => {
  // const navigate = useNavigate();
  const [input, setInput] = useState("");

  return (
    <form
      className={s.form}
      onSubmit={(e) => {
        e.preventDefault();
        // navigate("/search-news?news=" + input);
        setSearch({ query: input, page: 1 });
      }}
    >
      <input
        className={s.input}
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
