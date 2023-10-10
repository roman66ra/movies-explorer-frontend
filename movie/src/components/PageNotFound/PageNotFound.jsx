import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <main className="page-not-found">
      <h1 className="page-not-found__title">404</h1>
      <p className="page-not-found__subtitle">Страница не найдена</p>
      <button
        className="page-not-found__back-link"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </main>
  );
}
