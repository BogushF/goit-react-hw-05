import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../API.js";
import MovieGallery from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("movie") ?? "";

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        setMovies([]);
        const { results, total_pages } = await searchMovies(query, page);
        setTotalPage(total_pages);
        setMovies((prevState) => [...prevState, ...results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, page]);

  const hendleLoadMore = async () => {
    setPage(page + 1);
  };

  const handleSearch = async (query) => {
    searchParams.set("movie", query);

    setSearchParams(searchParams);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {error && <ErrorMessage />}

      {movies.length > 0 && <MovieGallery items={movies} />}

      {totalPage > page && <LoadMoreBtn onClick={hendleLoadMore} />}

      {loading && <Loader />}
    </div>
  );
};

export default MoviesPage;
