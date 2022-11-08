import s from "./SearchForm.module.scss";

const SearchForm = () => {
  return (
    <form className={s.form} onSubmit={() => {}}>
      <input
        className={s.input}
        type="text"
        placeholder="Search..."
        value={this.state.input}
        onChange={() => {}}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
