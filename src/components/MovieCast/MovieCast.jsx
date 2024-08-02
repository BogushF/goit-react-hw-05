import s from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieCredits } from "../../API.js";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MovieCast = () => {
  const [casts, setCasts] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === "") {
      return;
    }
    const getCast = async () => {
      try {
        setLoading(true);
        setError(false);
        const Actors = await movieCredits(movieId);

        setCasts(Actors);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <div className={s.boxActor}>
      <h3> Casts </h3>
      {error && <ErrorMessage />}
      <ul className={s.list}>
        {casts &&
          casts.map(({ id, name, profile_path, character }) => (
            <li key={id} className={s.box}>
              <img
                className={s.img}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                }
                alt={name}
              />
              <div>
                <h3>{name}</h3>
                <p> Character: {character}</p>
              </div>
            </li>
          ))}
      </ul>
      {loading && <Loader />}
    </div>
  );
};

export default MovieCast;
