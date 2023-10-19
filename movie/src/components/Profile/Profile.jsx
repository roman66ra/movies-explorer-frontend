import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { isEmailValid, isNameValidation } from "../../utils/utils";


export default function Profile({ handleLogout, isLogged, user, onEdit, isFormDisabled, isButtonDisabled, setIsButtonDisabled }) {
  const profile = { name: user[0].name, email: user[0].email };
  const [nameValue, setNameValue] = useState({
    name: user[0].name,
    nameError: false,
    nameErrorMessage: "",
  });
  const [emailValue, setEmailValue] = useState({
    email: user[0].email,
    emailError: false,
    emailErrorMessage: "",
  });
  const [edit, setEdit] = useState(false);


  const isNameValid = isNameValidation.test(nameValue.name);
  const isValid = isEmailValid.test(emailValue.email);

  const logout = () => {
    handleLogout();
  };

  const handleHideButton = () => {
    setEdit(true);
  };

  const handleSubmit = () => {
    onEdit(nameValue.name, emailValue.email)
    setEdit(false);
  };

  function handleChangeName(e) {
    const { value, validationMessage, validity } = e.target;
    setNameValue({
      name: value,
      nameError: validity.valid,
      nameErrorMessage: validationMessage,
    });
  }

  function handleChangeEmail(e) {
    const { value, validationMessage, validity } = e.target;
    setEmailValue({
      email: value,
      emailError: validity.valid,
      emailErrorMessage: validationMessage,
    });
    console.log(emailValue);
  }

  useEffect(() => {
    const disabled =
      !nameValue.nameError ||
      !emailValue.emailError ||
      !isValid ||
      !isNameValid

    setIsButtonDisabled(disabled);
  }, [nameValue, emailValue]);

  useEffect(() => {
    if (profile.name === nameValue.name && profile.email === emailValue.email) {
      setIsButtonDisabled(true)
    } else {
      setIsButtonDisabled(false)
    }
  }, [nameValue, emailValue, profile])

  return (
    <>
      <Header isLogged={isLogged}></Header>
      <main className="profile">
        <h1 className="profile__title">{`Привет, ${nameValue.name}!`}</h1>
        <form className="profile__form" name="profile" disabled={isFormDisabled}>
          <label className="profile__item">
            <span className="profile__text">Имя</span>
            <input
              className={`profile__input ${
                nameValue.nameErrorMessage.length > 0 || !isNameValid
                  ? "profile__input-error"
                  : ""
              }`}
              type="text"
              name="name"
              placeholder="Введите Ваше имя"
              minLength={2}
              maxLength={30}
              value={nameValue.name || ""}
              onChange={handleChangeName}
              disabled={edit ? false : true}
            />
            <span className="profile__error">
              {!nameValue.nameError
                ? nameValue.nameErrorMessage
                : nameValue.name.length > 0
                ? !isNameValid
                  ? "Введите корректное имя"
                  : nameValue.name === profile.name
                  ? "Имя должно отличаться"
                  : ""
                : ""}
            </span>
          </label>
          <div className="profile__line" />
          <label className="profile__item">
            <span className="profile__text">E-mail</span>
            <input
              className={`profile__input ${
                emailValue.emailErrorMessage.length > 0 || !isValid
                  ? "profile__input-error"
                  : ""
              }`}
              type="email"
              name="email"
              placeholder="Введите Ваш email"
              minLength={2}
              maxLength={30}
              value={emailValue.email || ""}
              onChange={handleChangeEmail}
              disabled={edit ? false : true}
            />
            <span className="profile__error">
              {emailValue.emailErrorMessage.length > 0
                ? emailValue.emailErrorMessage
                : emailValue.email.length > 0
                ? !isValid
                  ? "Некорректный формат email"
                  : emailValue.email === profile.email && emailValue.emailError
                  ? "Email должен отличаться"
                  : ""
                : ""}
            </span>
          </label>
        </form>
        <div
          className={`profile__buttons ${edit ? "profile__buttons-hide" : ""}`}
        >
          <button
            className="profile__button-submit"
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
            disabled={isButtonDisabled}
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
