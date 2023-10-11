export default function NavTab() {
  return (
    <section className="navtab">
      <nav className="navtab__navigation">
        <ul className="navtab__list">
          <li className="navtab__title">
            <a href="#about-project" className="navtab__link">
              О проекте
            </a>
          </li>
          <li className="navtab__title">
            <a href="#techs" className="navtab__link">
              Технологии
            </a>
          </li>
          <li className="navtab__title">
            <a href="#about-me" className="navtab__link">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
