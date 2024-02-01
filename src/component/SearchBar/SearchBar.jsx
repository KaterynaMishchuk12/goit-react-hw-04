import toast from "react-hot-toast";

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
