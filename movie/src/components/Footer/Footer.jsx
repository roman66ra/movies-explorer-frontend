import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__links">
        <p className="footer__copyright">&copy; 2023</p>
        <ul className="footer__list">
          <li className="footer__list-text">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru"
              rel="noreferrer"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list-text">
            <a
              className="footer__link"
              href="https://github.com"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
