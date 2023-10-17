export function filterMovies(movie, text, short) {
  const lowerText = text.toLowerCase();
  const check = movie.nameRU.toLowerCase().includes(lowerText);
  return short ? (check && movie.duration <=40) : check
}
