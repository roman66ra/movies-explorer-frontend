import { Link } from "react-router-dom";

export default function Login({ handleLogin }) {
  const login = () => {
    handleLogin();
  };

  return (
    <section className="login">
      <Link
        alt="Логотип приложения (зелёное кольцо)"
        className="login__logo"
        to={"/"}
      ></Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form
        className="login__form"
        autoComplete="off"
        action=""
        name="login"
        onSubmit={login}
      >
        <label className="login__label">
          E-mail
          <input
            className="login__input"
            type="email"
            name="email"
            required
            placeholder="E-mail"
            minLength="2"
            maxLength="40"
          ></input>
        </label>
        <label className="login__label">
          Пароль
          <input
            className="login__input"
            type="password"
            name="password"
            required
            placeholder="Пароль"
            minLength="2"
            maxLength="40"
          ></input>
        </label>
        <button className="login__submit" type="submit">
          Войти
        </button>
        <p className="login__register-text">
          Ещё не зарегистрированы?
          <Link className="login__register-link" to="/signup">
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}
