import { useLocation } from "react-router-dom";
import MovieCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies, onSave, onRemove, isSaved }) {
  const { pathname } = useLocation();
  return (
    <section className="movies-list">
      <ul key={movies._id} className="movies-list__items">
        {movies.map(({ _id, ...movie }) => (
          <MovieCard
            onSave={
              pathname === "/movies" ? () => onSave(movie) : () => onSave(_id)
            }
            onRemove={
              pathname === "/movies"
                ? () => onRemove(movie)
                : () => onRemove(_id)
            }
            key={movie.id || _id}
            movieData={movie}
          />
        ))}
      </ul>
    </section>
  );
}
