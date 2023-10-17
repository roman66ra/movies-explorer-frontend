import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import movies from "../../constants/movies-for-render";

function Movies({ isLogged }) {
  isLogged = true;
  return (
    <>
      <Header isLogged={isLogged}></Header>
      <main className="movies">
        <SearchForm></SearchForm>
        <FilterCheckbox></FilterCheckbox>
        <MoviesCardList movies={movies}></MoviesCardList>
        <section className="movies__button">
          <button className="movies__button-more" type="button">
            Ещё
          </button>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Movies;
