import { Link } from "react-router-dom";
import SignForm from "../SignForm/SignForm";

export default function Login({ handleLogin }) {
  const login = () => {
    handleLogin();
  };

  return (
    <main className="login">
      <Link
        className="login__logo"
        to={"/"}
      ></Link>
      <h1 className="login__title">Рады видеть!</h1>
      <SignForm handleSubmit={login} link={'/signup'} linkText={'Регистрация'} text={'Ещё не зарегистрированы?'} submit={'Войти'}></SignForm>
    </main>
  );
}