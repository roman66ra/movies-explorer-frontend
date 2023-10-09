import "./Portfolio.css";
import link from "../../images/portfolio_link.svg";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__page">
          <Link
            className="portfolio__link"
            to="https://github.com/"
            rel="noreferrer"
            target="_blank"
          >
            Статичный сайт
          </Link>
          <Link to="https://github.com/">
            <img
              className="portfolio__icon"
              src={link}
              alt="ссылка на гитхаб с проектом"
              rel="noreferrer"
              target="_blank"
            ></img>
          </Link>
        </li>
        <li className="portfolio__page">
          <Link
            className="portfolio__link"
            to="https://github.com/"
            rel="noreferrer"
            target="_blank"
          >
            Адаптивный сайт
          </Link>
          <Link to="https://github.com/">
            <img
              className="portfolio__icon"
              src={link}
              alt="ссылка на гитхаб с проектом"
              rel="noreferrer"
              target="_blank"
            ></img>
          </Link>
        </li>
        <li className="portfolio__page">
          <Link
            className="portfolio__link"
            to="https://github.com/"
            rel="noreferrer"
            target="_blank"
          >
            Одностраничное приложение
          </Link>
          <Link to="https://github.com/">
            <img
              className="portfolio__icon"
              src={link}
              alt="ссылка на гитхаб с проектом"
              rel="noreferrer"
              target="_blank"
            ></img>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
