import MovieCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies }) {
  return (
    <section className="movies-list">
    <ul className="movies-list__items">
      {movies.map(({ _id, ...movie }) => (
        <MovieCard key={_id} movieData={movie} />
      ))}
    </ul>
    </section>
  );
}
