import { Link, useNavigate } from "react-router-dom";
import SignForm from "../SignForm/SignForm";
import { useState } from "react";
import { mainApi } from "../../utils/MainApi";

export default function Login({ handleLogin, onTooltip }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    emailError: false,
    passwordError: false,
    emailErrorMessage: "",
    passwordErrorMessage: "",
  });
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }

    mainApi
      .login(formValue.email, formValue.password)
      .then((data) => {
        if (data.token) {
          handleLogin();
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
  };

  return (
    <main className="login">
      <Link className="login__logo" to={"/"}></Link>
      <h1 className="login__title">Рады видеть!</h1>
      <SignForm
        formValue={formValue}
        setFormValue={setFormValue}
        handleSubmit={login}
        link={"/signup"}
        linkText={"Регистрация"}
        text={"Ещё не зарегистрированы?"}
        submit={"Войти"}
      ></SignForm>
    </main>
  );
}
