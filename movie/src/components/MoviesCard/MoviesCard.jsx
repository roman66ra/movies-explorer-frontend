import { useState } from "react";
import { useLocation } from "react-router-dom";
import convertingTime from "../../utils/durationConverter";

function MoviesCard({ movieData }) {
  const { pathname } = useLocation();
  const [isSave, setIsSave] = useState(false);
  const [showToolTip, setShowToolTip] = useState(false);

  const saveMovieHandler = () => {
    setIsSave(true);
  };
  const deleteMovieHandler = () => {
    setIsSave(false);
  };

  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };

  return (
    <li className="movies-card">
      <img
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className="movies-card__image"
        alt={movieData.nameRu}
        src={movieData.image}
      />
      <button
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className={`
        ${isSave ? "movies-card__button_type_save" : "movies-card__button "} 
        ${showToolTip ? "movies-card__button_type_save-show" : ""}`}
        type="button"
        onClick={pathname === "/movies" ? saveMovieHandler : deleteMovieHandler}
      >
        {pathname === "/movies" && !isSave ? "Сохранить" : null}
        {pathname === "/movies" && isSave ? "" : null}
        {pathname === "/movies" ? null : "🞪"}
      </button>

      <div className="movies-card__description">
        <p className="movies-card__name">{movieData.nameRU}</p>
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
