import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navigation from "./components/Navigation/Navigation.jsx";
import Loader from "./components/Loader/Loader.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage.jsx")
);
const Review = lazy(() => import("./components/MovieReviews/MovieReviews.jsx"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast.jsx"));

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="credits" element={<MovieCast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
