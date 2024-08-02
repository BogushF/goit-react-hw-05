import s from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieGallery = ({ items }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {items.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={location}>
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieGallery;
