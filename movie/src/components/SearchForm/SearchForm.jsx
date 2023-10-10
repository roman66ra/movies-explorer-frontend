export default function SearchForm() {
  return (
    <form className="search-form" name="search">
      <input type="text" placeholder="Фильм" className="search-form__text" />
      <button type="submit" className="search-form__submit" />
    </form>
  );
}
