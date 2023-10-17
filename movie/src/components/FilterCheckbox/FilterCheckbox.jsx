export default function FilterCheckbox({ short, onShort }) {
  return (
    <section className="filter">
      <label className="filter__switch">
        <input
          className="filter__checkbox"
          type="checkbox"
          id="filter"
          onChange={onShort}
          checked={short}
        />
        <span className="filter__slider filter__round" />
      </label>
      <label htmlFor="filter" className="filter__text">
        Короткометражки
      </label>
    </section>
  );
}
