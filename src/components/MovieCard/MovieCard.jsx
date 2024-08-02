import s from "./MovieCard.module.css";

export default function MovieCard({
  details: { poster_path, title, vote_average, release_date, overview },
}) {
  return (
    <div className={s.card}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : `http://www.suryalaya.org/images/no_image.jpg`
        }
        loading="lazy"
        alt="Movie poster"
      />
      <div>
        <h4>{title}</h4>
        <ul>
          <li className={s.list}>
            {" "}
            <span className={s.span}>release date:</span> {release_date}
          </li>
          <li className={s.list}>
            <span className={s.span}>rating:</span> {vote_average}
          </li>
        </ul>
        <p>{overview}</p>
      </div>
    </div>
  );
}
