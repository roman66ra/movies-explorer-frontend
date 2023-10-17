import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function SearchForm({ onSearch, isShort }) {
  const pathname = useLocation();

  //Поиск сохраненного запроса
  const [searchText, setSearchText] = useState(() => {
    if (pathname.pathname === '/movies') {
      return localStorage.getItem("localSearchText");
    } else {
      return "";
    }
  });

  //Изменение текста запроса
  const changeSearchText = ({ target }) => {
    setSearchText(target.value);
  };

  //отправка формы, запуск функции поиска
  function submitSearchForm(e) {
    e.preventDefault();
    onSearch(searchText, isShort);
  }

  return (
    <section className="search-form-section">
      <form className="search-form" name="search" onSubmit={submitSearchForm}>
        <input
          type="text"
          placeholder="Фильм"
          className="search-form__text"
          value={searchText || ''}
          onChange={changeSearchText}
        />
        <button type="submit" className="search-form__submit" />
      </form>
    </section>
  );
}
