import s from "./MovieDetailsPage.module.css";
import { Suspense, useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { movieDetail } from "../../API";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieCard from "../../components/MovieCard/MovieCard";

const MovieDetailsPage = () => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getDetails() {
      try {
        setLoading(true);
        setError(false);
        const dataDetails = await movieDetail(movieId);

        setDetails(dataDetails);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getDetails();
  }, [movieId]);

  const goBack = useRef(location.state ?? "/movies");

  return (
    <div className={s.page}>
      <NavLink to={goBack.current} className={s.backbtn}>
        {" "}
        Go back{" "}
      </NavLink>
      {error && <ErrorMessage />}
      {details && <MovieCard details={details} />}
      <ul>
        <li>
          <NavLink to="credits"> Casts </NavLink>
        </li>
        <li>
          <NavLink to="reviews"> Reviews </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {loading && <Loader />}
    </div>
  );
};

export default MovieDetailsPage;
