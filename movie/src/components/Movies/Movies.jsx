import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { getNumberMovies } from "../../utils/utils";
import useWindowSize from "../../hooks/resizeWindow";
import { filterMovies } from "../../utils/filterMovies";
import { useLocation } from "react-router-dom";
import { moviesApi } from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import { mainApi } from "../../utils/MainApi";

export default function Movies({ isLogged, onTooltip }) {
  const { width } = useWindowSize();
  const pathname = useLocation().pathname;
  const [isNothing, setIsNothing] = useState(false);
  const [hideButtonMore, setHideButtonMore] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovie, setSavedMovie] = useState(
    JSON.parse(localStorage.getItem("savedMovie")) || []
  );
  const [isShort, setIsShort] = useState(() => {
    if (pathname.pathname === "/movies") {
      return JSON.parse(localStorage.getItem("short"));
    } else {
      return false;
    }
  });
  //Устанавливаем стандартное количество отображаемых фильмов
  const [numberMoviesDisplayed, setNubmerMoviesDislpayed] = useState(
    getNumberMovies().defaultMovies
  );
  const [movies, setMovies] = useState([]);
  const [startSearch, setStartSearch] = useState(false);


  function handleShort() {
    setIsShort(!isShort);
    searchMovies(localStorage.getItem("localSearchText"), !isShort);
  }
  //Функция нажатия на кнопку еще, увеличивающая значение при нажатии
  const handleMoreMovies = () => {
    setNubmerMoviesDislpayed(
      numberMoviesDisplayed + getNumberMovies().extraMovies
    );
  };

  //Отделение общего списка фильмов на нужное количество фильмов
  const moviesForRender = filteredMovies.slice(0, numberMoviesDisplayed);

  const searchMovies = (searchText, short) => {
    //если запрос пустой
    if (searchText === "") {
      onTooltip({
        statusOk: false,
        text: "Введите ключевое слово.",
        isOpen: true,
      });
      return;
    } else {
      localStorage.setItem("localSearchText", searchText); //сохраняем локально запрос
      localStorage.setItem("short", JSON.parse(short));
    }
    
    setNubmerMoviesDislpayed(getNumberMovies().defaultMovies);
    if (movies.length === 0 && startSearch===false) {
        setStartSearch(true);
        setIsLoading(true);
        moviesApi
          .getAllMovies()
          .then((res) => {
            setMovies(res);
            const filteredMovie = res.filter((movie) =>
            filterMovies(movie, searchText, short)
          );
      
          localStorage.setItem("localMovie", JSON.stringify(filteredMovie));
          setFilteredMovies(filteredMovie);
          })
          .catch((err) =>
            onTooltip({
              statusOk: false,
              text: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
              isOpen: true,
            })
          )
          .finally(() => setIsLoading(false));
    }
    //устанавливаем отфильтрованный список
    else {
    const filteredMovie = movies.filter((movie) =>
      filterMovies(movie, searchText, short)
    );

    localStorage.setItem("localMovie", JSON.stringify(filteredMovie));
    setFilteredMovies(filteredMovie);
  }}

  function handleSaveMovie(movie) {
    return mainApi
      .saveMovie(movie, localStorage.getItem("token"))
      .then((res) => {
        setSavedMovie([...savedMovie, res]);
        console.log(savedMovie)
      })
      .catch((err) => console.log(err));
  }

  function handleRemove(movie) {
    const movieId = savedMovie.find((item) => movie.id === item.movieId)._id;
    return mainApi
      .removeMovie(movieId, localStorage.getItem("token"))
      .then(() => {
        const newArr = savedMovie.filter((item) => item._id !== movieId);
        setSavedMovie(newArr);
      })
      .catch((err) => console.log(err));
  }

  function handleGetSavedMovies() {
    return mainApi
      .getMovies(localStorage.getItem("token"))
      .then((res) => {
        setSavedMovie(res);
        console.log(savedMovie);
      })
      .catch((err) => console.log(err));
  }

  //контроль сокрытия кнопки еще
  useEffect(() => {
    setHideButtonMore(moviesForRender.length >= filteredMovies.length);
  }, [filteredMovies, moviesForRender]);

  //контроль пустого массива фильмов
  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNothing(true);
    } else {
      setIsNothing(false);
    }
  }, [filteredMovies]);

  // получаем список фильмов для рендера по сохраненному поиску
  useEffect(() => {
    const localMovies = JSON.parse(localStorage.getItem("localMovie"));
    if (localMovies) {
      if (localMovies === 0) {
        return false;
      } else {
        setIsShort(JSON.parse(localStorage.getItem("short")));
        setFilteredMovies(localMovies);
        if (localMovies.length === 0) {
          setIsNothing(true);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (width >= 1024) {
      if (numberMoviesDisplayed <= getNumberMovies().defaultMovies) {
        setNubmerMoviesDislpayed(getNumberMovies().defaultMovies);
      }
    } else if (width >= 768) {
      if (numberMoviesDisplayed <= getNumberMovies().defaultMovies) {
        setNubmerMoviesDislpayed(getNumberMovies().defaultMovies);
      }
    } else {
      if (numberMoviesDisplayed <= getNumberMovies().defaultMovies) {
        setNubmerMoviesDislpayed(getNumberMovies().defaultMovies);
      }
    }
  }, [width, numberMoviesDisplayed]);

  useEffect(() => {
    handleGetSavedMovies();
  }, []);

  useEffect(() => {
    localStorage.setItem("savedMovie", JSON.stringify(savedMovie));
  }, [savedMovie]);

  return (
    <>
      <Header isLogged={isLogged}></Header>
      <main className="movies">
        <SearchForm onSearch={searchMovies} isShort={isShort}></SearchForm>
        <FilterCheckbox short={isShort} onShort={handleShort}></FilterCheckbox>
        {isLoading ? (
          <Preloader></Preloader>
        ) : (
          <>
            <MoviesCardList
              movies={moviesForRender}
              onSave={handleSaveMovie}
              onRemove={handleRemove}
              isSaved={savedMovie}
            ></MoviesCardList>
            {isNothing && !startSearch? (
              <span className="movies__nothing">Ничего не найдено</span>
            ) : (
              ""
            )}
            <section className="movies__button">
              <button
                className={`movies__button-more ${
                  hideButtonMore ? "movies__button-more_hide" : ""
                }`}
                type="button"
                onClick={handleMoreMovies}
              >
                Ещё
              </button>
            </section>
          </>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}
