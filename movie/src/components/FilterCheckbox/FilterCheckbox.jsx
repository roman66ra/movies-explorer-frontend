export default function FilterCheckbox() {
  return (
    <div className="filter">
      <label className="filter__switch">
        <input className="filter__checkbox" type="checkbox" id="filter"/>
        <span className="filter__slider filter__round" />
      </label>
      <label for="filter" className="filter__text">Короткометражки</label>
    </div>
  );
}
