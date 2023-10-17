import { Link, useLocation } from "react-router-dom";

export default function SignForm({
  handleSubmit,
  link,
  linkText,
  text,
  submit,
}) {
  const { pathname } = useLocation();

  return (
    <section className="sign">
      <form
        className="sign__form"
        autoComplete="off"
        name="sign"
        onSubmit={handleSubmit}
      >
        <label
          className={`sign__label ${
            pathname === "/signin" ? "sign__label_none" : ""
          }`}
        >
          Имя
          <input
            className="sign__input"
            type="text"
            name="name"
            required
            placeholder="Имя"
            minLength="2"
            maxLength="40"
          ></input>
        </label>
        <label className="sign__label">
          E-mail
          <input
            className="sign__input"
            type="email"
            name="email"
            required
            placeholder="E-mail"
            minLength="2"
            maxLength="40"
          ></input>
        </label>
        <label className="sign__label">
          Пароль
          <input
            className="sign__input"
            type="password"
            name="password"
            required
            placeholder="Пароль"
            minLength="2"
            maxLength="40"
          ></input>
        </label>
        <button className={`sign__submit ${pathname === "/signup" ? "sign__submit_space" : ""}`} type="submit">
          {submit}
        </button>
        <p className="sign__text">
          {text}
          <Link className="sign__link" to={`${link}`}>
            {linkText}
          </Link>
        </p>
      </form>
    </section>
  );
}
