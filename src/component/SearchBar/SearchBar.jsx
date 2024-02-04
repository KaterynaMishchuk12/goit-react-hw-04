import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const input = evt.target;
    if (input.elements.query.value.trim() === "") {
      toast.error("Please, fill in the search field");
      return;
    }
    onSearch(input.elements.query.value.trim());
    input.reset();
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
