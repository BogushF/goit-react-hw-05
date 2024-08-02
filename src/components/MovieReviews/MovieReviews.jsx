import s from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieReviews } from "../../API";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Review = () => {
  const [review, setReview] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getReview = async () => {
      try {
        setLoading(true);
        setError(false);
        const reviews = await movieReviews(movieId);

        setReview(reviews);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getReview();
  }, [movieId]);

  return (
    <div className={s.boxReview}>
      <h2>Review</h2>
      {error && <ErrorMessage />}
      <ul>
        {review &&
          review.map(({ id, author, content }) => (
            <li key={id} className={s.box}>
              <h3>{author}</h3>
              <p> {content}</p>
            </li>
          ))}
      </ul>

      {loading && <Loader />}
    </div>
  );
};

export default Review;
