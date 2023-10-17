import "./BurgerMenu.css";
import { NavLink } from "react-router-dom";

export default function BurgerMenu({ isBurgerOpened, handleCloseBurger }) {
  return (
    <div className={isBurgerOpened ? "burger burger_opened" : "burger"}>
      <button
        className="burger__close"
        onClick={handleCloseBurger}
        type="button"
      />
      <nav className="burger__nav">
      <ul className="burger__list">
        <li className="burger__item">
          <NavLink to="/" className="burger__link">
            Главная
          </NavLink>
        </li>
        <li className="burger__item">
          <NavLink to="/movies" className="burger__link">
            Фильмы
          </NavLink>
        </li>
        <li className="burger__item">
          <NavLink to="/saved-movies" className="burger__link">
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      </nav>
      <NavLink to="/profile" className="burger__profile">
        Аккаунт
      </NavLink>
    </div>
  );
}
