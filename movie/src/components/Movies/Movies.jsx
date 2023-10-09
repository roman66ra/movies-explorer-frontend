import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import movies from "../../constants/movies-for-render";

function Movies({ isLogged }) {
  isLogged = true;
  return (
    <div className="movies">
      <Header isLogged={isLogged}></Header>
      <SearchForm></SearchForm>
      <FilterCheckbox></FilterCheckbox>
      <MoviesCardList movies={movies}></MoviesCardList>
      <button className="movies__button-more" type="button">
        Ещё
      </button>
      <Footer></Footer>
    </div>
  );
}

export default Movies;
