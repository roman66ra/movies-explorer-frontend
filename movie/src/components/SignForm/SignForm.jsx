import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { isEmailValid, isNameValidation } from "../../utils/utils";

export default function SignForm({
  setFormValue,
  formValue,
  handleSubmit,
  link,
  linkText,
  text,
  submit,
  isButtonDisabled,
  setIsButtonDisabled,
  isFormDisabled
}) {
  const { pathname } = useLocation();

  

  const isNameValid = isNameValidation.test(formValue.name)
  const isValid = isEmailValid.test(formValue.email);

  useEffect(() => {
    const disabled =
      (pathname === ('/signup') ? !formValue.nameError : false) ||
      !formValue.emailError ||
      !formValue.passwordError ||
      !isValid;
    setIsButtonDisabled(disabled);
  }, [formValue, isValid, pathname]);

  const handleChange = (e) => {
    const { name, value, validationMessage, validity } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
      [`${name}Error`]: validity.valid,
      [`${name}ErrorMessage`]: validationMessage,
    });
  };
  return (
    <section className="sign">
      <form
        className="sign__form"
        autoComplete="off"
        name="sign"
        onSubmit={handleSubmit}
        disabled={isFormDisabled}
      >
        {pathname === "/signin" ? (
          ""
        ) : (
          <label className={`sign__label`}>
            Имя
            <input
              className={`sign__input ${
                formValue.nameErrorMessage.length > 0 ? "sign__input-error" : ""
              }`}
              type="text"
              name="name"
              required
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              value={formValue.name}
              onChange={handleChange}
            ></input>
            <span className="sign__error">
              {formValue.nameErrorMessage.length > 0
                ? formValue.nameErrorMessage
                : formValue.name.length > 0
                ? !isNameValid
                  ? "Некорректный формат имени"
                  : ""
                : ""}
            </span>
          </label>
        )}

        <label className="sign__label">
          E-mail
          <input
            className={`sign__input ${
              formValue.emailErrorMessage.length > 0 ? "sign__input-error" : ""
            }`}
            type="email"
            name="email"
            required
            placeholder="E-mail"
            minLength="2"
            maxLength="40"
            value={formValue.email}
            onChange={handleChange}
          ></input>
          <span className="sign__error">
            {formValue.emailErrorMessage.length > 0
              ? formValue.emailErrorMessage
              : formValue.email.length > 0
              ? !isValid
                ? "Некорректный формат email"
                : ""
              : ""}
          </span>
        </label>
        <label className="sign__label">
          Пароль
          <input
            className={`sign__input ${
              formValue.passwordErrorMessage.length > 0
                ? "sign__input-error"
                : ""
            }`}
            type="password"
            name="password"
            required
            placeholder="Пароль"
            minLength="2"
            maxLength="40"
            value={formValue.password}
            onChange={handleChange}
          ></input>
          <span className="sign__error">
            {formValue.passwordErrorMessage.length > 0
              ? formValue.passwordErrorMessage
              : ""}
          </span>
        </label>
        <button
          disabled={isButtonDisabled}
          className={`sign__submit ${
            pathname === "/signup" ? "sign__submit_space" : ""
          }`}
          type="submit"
        >
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
