import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import convertingTime from "../../utils/durationConverter";

function MoviesCard({ movieData, onSave, onRemove, isSaved }) {
  const { pathname } = useLocation();
  const [isSave, setIsSave] = useState(false);
  const [showToolTip, setShowToolTip] = useState(false);

  const saveMovieHandler = () => {
    setIsSave(true);
    onSave();
  };
  const deleteMovieHandler = () => {
    setIsSave(false);
    onRemove();
  };

  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };

  useEffect(() => {

    if (pathname === '/movies') {
      const result = isSaved.some((item) => (movieData.id) === item.movieId)
      setIsSave(result);
    }
  }, [isSaved, pathname, movieData])

  return (
    <li key={movieData.id} className="movies-card">
      <Link to={movieData.trailerLink} target="_blank">
        <img
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
          className="movies-card__image"
          alt={movieData.nameRU}
          src={
            pathname === "/movies"
              ? `https://api.nomoreparties.co/${movieData.image.url}`
              : `${movieData.image}`
          }
        />
      </Link>
      <button
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className={`
        ${isSave ? "movies-card__button_type_save" : "movies-card__button "} 
        ${showToolTip ? "movies-card__button_type_save-show" : ""}`}
        type="button"
        onClick={
          pathname === "/movies"
            ? !isSave
              ? saveMovieHandler
              : deleteMovieHandler
            : deleteMovieHandler
        }
      >
        {pathname === "/movies" && !isSave ? "Сохранить" : null}
        {pathname === "/movies" && isSave ? "" : null}
        {pathname === "/saved-movies" ? "🞪" : null}
      </button>

      <div className="movies-card__description">
        <h2 className="movies-card__name">{movieData.nameRU}</h2>
        <span
          className={`movies-card__duration ${
            pathname === "/saved-movies" ? "movies-card__duration-last" : ""
          }`}
        >
          {convertingTime(movieData.duration)}
        </span>
      </div>
    </li>
  );
}

export default MoviesCard;
