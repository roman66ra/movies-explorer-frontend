import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import movies from "../../constants/saved-movies";

export default function SavedMovies({ isLogged }) {
  isLogged = true;
  return (
    <>
      <Header isLogged={isLogged}></Header>
      <main className="saved-movies">
        <SearchForm></SearchForm>
        <FilterCheckbox></FilterCheckbox>
        <MoviesCardList movies={movies}></MoviesCardList>
      </main>
      <Footer></Footer>
    </>
  );
}
