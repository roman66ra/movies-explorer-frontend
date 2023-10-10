import { NavLink, useLocation } from "react-router-dom";
import logo from "../../images/header_logo.svg";
import BurgerButton from "./BurgerButton/BurgerButton";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useState } from "react";

export default function Header({ link, isLogged }) {
  const { pathname } = useLocation();
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const handleOpenBurger = () => {
    setIsBurgerOpened(true);
  };
  const handleCloseBurger = () => {
    setIsBurgerOpened(false);
  };

  return (
    <header className="header">
      <NavLink to={"/"}>
        <img className="header__logo" src={logo} alt="Логотип проекта" />
      </NavLink>
      {isLogged ? (
        <>
          <nav className="header__links">
            <NavLink
              className={`header__link ${
                pathname === "/movies" ? "header__link_type-active" : ""
              }`}
              to={"/movies"}
            >
              Фильмы
            </NavLink>
            <NavLink
              className={`header__link ${
                pathname === "/saved-movies" ? "header__link_type-active" : ""
              }`}
              to={"/saved-movies"}
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
          <NavLink
            to={"/profile"}
            replace
            type="submit"
            className="header__account"
          >
            Аккаунт
          </NavLink>
          <BurgerButton handleOpenBurger={handleOpenBurger}></BurgerButton>
          <BurgerMenu
            isBurgerOpened={isBurgerOpened}
            handleCloseBurger={handleCloseBurger}
          ></BurgerMenu>
        </>
      ) : (
        <nav className="header__notlogged-nav">
          <ul className="header__notlogged-menu">
            <li className="header__menu-item">
              <NavLink className="header__menu-link" to="/signup">
                Регистрация
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink
                className="header__menu-link header__menu-link_type_login"
                to="/signin"
              >
                Войти
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
