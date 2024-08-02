import { useEffect, useState } from "react";
import { getMovies } from "../../API.js";
import MovieGallery from "../../components/MovieList/MovieList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const { results, total_pages } = await getMovies(page);
        setMovies((prevState) => [...prevState, ...results]);
        setTotalPage(total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  const hendleLoadMore = async () => {
    setPage(page + 1);
  };
  return (
    <div>
      <h2>Trending movies </h2>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieGallery items={movies} />}

      {totalPage > page && <LoadMoreBtn onClick={hendleLoadMore} />}
    </div>
  );
};

export default HomePage;
