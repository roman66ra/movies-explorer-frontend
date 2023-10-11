import { Link } from "react-router-dom";
import SignForm from "../SignForm/SignForm";

function Register({ onRegister }) {

  function handleSubmit() {
    onRegister();
  }

  return (
    <main className="register">
      <Link
        className="register__logo"
        to={"/"}
      ></Link>
      <h1 className="register__title">Добро пожаловать!</h1>
      <SignForm handleSubmit={handleSubmit} link={'/signin'} linkText={'Войти'} text={'Уже зарегистрированы?'} submit={'Зарегистрироваться'}></SignForm>
    </main>
  );
}

export default Register;
