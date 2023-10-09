import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import movies from "../../constants/saved-movies";

export default function SavedMovies({ isLogged }) {
  isLogged = true;
  return (
    <div className="saved-movies">
      <Header isLogged={isLogged}></Header>
      <SearchForm></SearchForm>
      <FilterCheckbox></FilterCheckbox>
      <MoviesCardList movies={movies}></MoviesCardList>
      <Footer></Footer>
    </div>
  );
}
