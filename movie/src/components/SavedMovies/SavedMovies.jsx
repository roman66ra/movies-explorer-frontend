import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { mainApi } from "../../utils/MainApi";
import { filterMovies } from "../../utils/filterMovies";

export default function SavedMovies({ isLogged, onTooltip }) {
  const [savedMovies, setSavedMovies] = useState(() => {
    return JSON.parse(localStorage.getItem("savedMovie"))
  })
  const [searchedResult, setSearchedResult] = useState(savedMovies);
  const [isNothing, setIsNothing] = useState(false);

  function handleRemove(id) {
    return mainApi.removeMovie(id, localStorage.getItem("token"))
      .then((res) => {
        const newArr = savedMovies.filter((item) => item._id !== id)
        setSavedMovies(newArr);

        const newArrResult = searchedResult.filter((item) => item._id !== id)
        setSearchedResult(newArrResult);
        localStorage.setItem("savedMovie", JSON.stringify(newArr));
      })
      .catch((err) => {
        if (err === "Ошибка в remove: 400") {
          onTooltip({ statusOk: false, text: "При удалении карточки произошла ошибка.", isOpen: true })
        } else onTooltip({ statusOk: false, text: "Что-то пошло не так...", isOpen: true })
      })
  }

  function searchMovies(querry, shorts) {
    const currentSearchedResult = savedMovies.filter(movie => filterMovies(movie, querry, shorts));
    if (currentSearchedResult.length === 0) {
      setIsNothing(true);
      setSearchedResult([]);
    } else {
      setIsNothing(false);
      console.log("Найденные после фильтрации фильмы:", currentSearchedResult);
      setSearchedResult(currentSearchedResult);
    }
  }
  const [isShort, setIsShort] = useState(false)

  function handleShort() {
    setIsShort(!isShort);
  }

  return (
    <>
      <Header isLogged={isLogged}></Header>
      <main className="saved-movies">
        <SearchForm onSearch={searchMovies} isShort={isShort}></SearchForm>
        <FilterCheckbox short={isShort} onShort={handleShort}></FilterCheckbox>
        <MoviesCardList movies={searchedResult} onRemove={handleRemove}></MoviesCardList>
        {isNothing ? (
              <span className="movies__nothing">Ничего не найдено</span>
            ) : (
              ""
            )}
      </main>
      <Footer></Footer>
    </>
  );
}
