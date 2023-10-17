import CurrentUserContext from "../../context/CurrentUserContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import Tooltip from "../Tooltip/Tooltip";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { mainApi } from "../../utils/MainApi";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [tooltip, setTooltip] = useState({
    state: true,
    text: "",
    isOpen: false,
  });

  const handleCloseTooltip = () => {
    setTooltip({ ...tooltip, isOpen: false });
  };

  function handleLogin() {
    setIsLogged(true);
  }

  function handleLogout() {
    localStorage.clear();
    setIsLogged(false);
    navigate("/signin", { replace: true });
  }

  const handleTokenCheck = () => {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .getUser(token)
        .then((res) => {
          if (res) {
            navigate("/movies", { replace: true });
            setIsLogged(true);
          }
        })
        .catch(() =>
          setTooltip({
            state: false,
            text: "На сервере произошла ошибка",
            isOpen: true,
          })
        );
    }
  };

  const handleEditProfile = (name, email) => {
    const token = localStorage.getItem("token");
    mainApi
      .editProfile(name, email, token)
      .then((res) => {
        setCurrentUser({
          ...currentUser,
          ...res,
          ...res.data,
        });
        setTooltip({ isOpen: true, statusOk: true, text: "Успешно!" });
      })
      .catch((res) =>
        setTooltip({ isOpen: true, statusOk: false, text: "Произошла ошибка" })
      );
  };

  useEffect(() => {
    handleTokenCheck();
    Promise.all([mainApi.getUser(localStorage.getItem("token"))])
      .then((result) => {
        setCurrentUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLogged]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <Routes>
          <Route path="/" element={<Main isLogged={isLogged} />} />
          <Route
            path="/signin"
            element={
              <Login handleLogin={handleLogin} onTooltip={setTooltip}></Login>
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                onTooltip={setTooltip}
                setCurrentUser={setCurrentUser}
                onLogin={handleLogin}
              ></Register>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                isLogged={isLogged}
                onTooltip={setTooltip}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                isLogged={isLogged}
                onTooltip={setTooltip}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                handleLogout={handleLogout}
                isLogged={isLogged}
                user={currentUser}
                onEdit={handleEditProfile}
              />
            }
          />
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
      </div>
      <Tooltip
        state={tooltip.state}
        text={tooltip.text}
        isOpen={tooltip.isOpen}
        onClose={handleCloseTooltip}
      ></Tooltip>
    </CurrentUserContext.Provider>
  );
}
