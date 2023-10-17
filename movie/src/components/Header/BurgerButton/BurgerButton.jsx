export default function BurgerButton({ handleOpenBurger }) {
  return (
    <button
      className="burger-button"
      onClick={handleOpenBurger}
      type="button"
    />
  );
}
