import { Link, useNavigate } from "react-router-dom";
import SignForm from "../SignForm/SignForm";
import { useState } from "react";
import { mainApi } from "../../utils/MainApi";

function Register({ onTooltip, setCurrentUser, onLogin }) {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    nameError: false,
    emailError: false,
    passwordError: false,
    nameErrorMessage: "",
    emailErrorMessage: "",
    passwordErrorMessage: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isFormDisabled, setIsformDisabled] = useState(false)
  const handleSubmit = (e) => {
    setIsButtonDisabled(true)
    setIsformDisabled(true)
    e.preventDefault();
    if (!formValue.name || !formValue.email || !formValue.password) {
      return;
    }
    mainApi
      .registration(formValue.name, formValue.email, formValue.password)
      .then((res) => {
        if (res) {
          mainApi
            .login(formValue.email, formValue.password)
            .then((data) => {
              if (data.token) {
                onLogin();
                navigate("/movies", { replace: true });
                setFormValue({ email: "", password: "" });
              }
            })
            .catch((res) => {
              if (res === "Ошибка 401") {
                onTooltip({
                  statusOk: false,
                  text: "Неверно введен логин/пароль",
                  isOpen: true,
                });
              } else {
                onTooltip({
                  statusOk: false,
                  text: "Во время авторизации произошла ошибка",
                  isOpen: true,
                });
              }
            });
        }
      })
      .catch((err) => {
        console.log(err);
        if (err === "Ошибка 409") {
          onTooltip({
            state: false,
            text: "Пользователь с указанным email уже зарегистрирован",
            isOpen: true,
          });
        } else {
          onTooltip({
            state: false,
            text: "Во время регистрации произошла ошибка",
            isOpen: true,
          });
        }
      })
      .finally(() => {
        setIsformDisabled(false)
        setIsButtonDisabled(false)
      })
  };

  return (
    <main className="register">
      <Link className="register__logo" to={"/"}></Link>
      <h1 className="register__title">Добро пожаловать!</h1>
      <SignForm
        setFormValue={setFormValue}
        formValue={formValue}
        handleSubmit={handleSubmit}
        link={"/signin"}
        linkText={"Войти"}
        text={"Уже зарегистрированы?"}
        submit={"Зарегистрироваться"}
        isButtonDisabled={isButtonDisabled}
        setIsButtonDisabled={setIsButtonDisabled}
        isFormDisabled={isFormDisabled}
      ></SignForm>
    </main>
  );
}

export default Register;
