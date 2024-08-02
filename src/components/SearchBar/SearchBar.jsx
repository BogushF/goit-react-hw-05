import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchMovie = form.elements.searchMovie.value;

    if (searchMovie.trim() === "") {
      toast("You haven't entered anything to search for....", {
        style: {
          color: "red",
        },
      });
      return;
    }

    onSearch(searchMovie);
    form.reset();
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="searchMovie"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
        <button className={s.btn} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
