import { useState } from "react";
import Header from "../Header/Header";

export default function Profile({ handleLogout, isLogged }) {
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");
  const [edit, setEdit] = useState(false);
  isLogged = true;

  const logout = () => {
    handleLogout();
  };

  const handleHideButton = () => {
    setEdit(true);
  };

  const handleSubmit = (e) => {
    setEdit(false);
  };

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      <Header isLogged={isLogged}></Header>
      <main className="profile">
        <h1 className="profile__title">{`Привет, ${name}!`}</h1>
        <form className="profile__form" name="profile">
          <label className="profile__item">
            <span className="profile__text">Имя</span>
            <input
              className="profile__input"
              type="text"
              name="name"
              placeholder="Введите Ваше имя"
              minLength={2}
              maxLength={30}
              value={name || ""}
              onChange={handleChangeName}
              disabled={edit ? false : true}
            />
          </label>
          <div className="profile__line" />
          <label className="profile__item">
            <span className="profile__text">E-mail</span>
            <input
              className="profile__input"
              type="email"
              name="email"
              placeholder="Введите Ваш email"
              minLength={2}
              maxLength={30}
              value={email || ""}
              onChange={handleChangeEmail}
              disabled={edit ? false : true}
            />
          </label>
        </form>
        <div
          className={`profile__buttons ${edit ? "profile__buttons-hide" : ""}`}
        >
          <button
            className="profile__button-submit"
            form="profile__form"
            type="submit"
            onClick={handleHideButton}
          >
            Редактировать
          </button>
          <button
            className="profile__button-logout"
            type="button"
            onClick={logout}
          >
            Выйти из аккаунта
          </button>
        </div>
        <div className={`profile__buttons-save `}>
          <button
            className={`profile__button-save ${
              edit ? "" : "profile__buttons-save-show"
            }`}
            type="button"
            onClick={handleSubmit}
          >
            Сохранить
          </button>
        </div>
      </main>
    </>
  );
}
