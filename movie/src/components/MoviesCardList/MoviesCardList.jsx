import MovieCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies }) {
  return (
    <section className="movies-list">
      {movies.map(({ _id, ...movie }) => (
        <MovieCard key={_id} movieData={movie} />
      ))}
    </section>
  );
}
