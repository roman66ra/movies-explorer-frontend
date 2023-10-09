export default function FilterCheckbox() {
  return (
    <div className="filter">
      <label className="filter__switch">
        <input className="filter__checkbox" type="checkbox" />
        <span className="filter__slider filter__round" />
      </label>
      <p className="filter__text">Короткометражки</p>
    </div>
  );
}
