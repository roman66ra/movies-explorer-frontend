import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__page">
          <Link
            className="portfolio__link"
            to="https://github.com/roman66ra/how-to-learn"
            rel="noreferrer"
            target="_blank"
          >
            Статичный сайт
          </Link>
        </li>
        <li className="portfolio__page">
          <Link
            className="portfolio__link"
            to="https://roman66ra.github.io/russian-travel"
            rel="noreferrer"
            target="_blank"
          >
            Адаптивный сайт           
          </Link>
        </li>
        <li className="portfolio__page">
          <Link
            className="portfolio__link"
            to="https://romanramesto.nomoredomainsicu.ru/sign-in"
            rel="noreferrer"
            target="_blank"
          >
            Одностраничное приложение            
          </Link>
        </li>
      </ul>
    </div>
  );
}
