import toast from "react-hot-toast";

const notify = () => toast("Please, fill in the search field");

export const SearchBar = (onSearch) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    if (form !== "") {
      onSearch(form.elements.query.value);
      form.reset;
    } else {
      return notify;
    }
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
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
