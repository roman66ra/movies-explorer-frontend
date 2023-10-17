export default function InfoTooltip({ isOpen, onClose, state, text }) {
  return (
    <section className={`tooltip tooltip_infotooltip ${isOpen && "tooltip_opened"}`}>
      <figure className="tooltip__container-infotooltip">
        <button
          className="tooltip__close-button tooltip__close-button_place-image"
          type="button"
          onClick={onClose}
        >Закрыть</button>
        <span 
        >{state}</span>
        <p className="tooltip__infotooltip_title">{text}</p>
      </figure>
    </section>
  );
}
