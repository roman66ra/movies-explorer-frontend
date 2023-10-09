import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(true);
  const navigate = useNavigate();

  function handleRegistration() {
    navigate("/signin", { replace: true });
  }

  function handleLogin() {
    setIsLogged(true);
    navigate("/movies", { replace: true });
  }
  function handleLogout() {
    setIsLogged(false);
    navigate("/signin", { replace: true });
  }

  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Main isLogged={isLogged}></Main>} />
        <Route path="/movies" element={<Movies isLogged={isLogged}></Movies>} />
        <Route
          path="/saved-movies"
          element={<SavedMovies isLogged={isLogged}></SavedMovies>}
        />
        <Route
          path="/profile"
          element={
            <Profile handleLogout={handleLogout} isLogged={isLogged}></Profile>
          }
        />
        <Route
          path="/signin"
          element={<Login handleLogin={handleLogin}></Login>}
        />
        <Route
          path="/signup"
          element={
            <Register handleRegistration={handleRegistration}></Register>
          }
        />
        <Route
          path="*"
          element={
            <PageNotFound
              handleRegistration={handleRegistration}
            ></PageNotFound>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
