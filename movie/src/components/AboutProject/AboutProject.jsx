import "./AboutProject.css";

export default function aboutProject() {
  return (
    <div className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__description">
        <div className="about-project__text-column">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__text-column">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__line">
        <div className="about-project__line-column about-project__line-column_type_one">
          <p className="about-project__week about-project__week_one">
            1 неделя
          </p>
          <p className="about-project__week-text">Back-end</p>
        </div>
        <div className="about-project__line-column about-project__line-column_type_two">
          <p className="about-project__week about-project__week_two">
            4 недели
          </p>
          <p className="about-project__week-text">Front-end</p>
        </div>
      </div>
    </div>
  );
}
