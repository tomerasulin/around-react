export const ImagePopup = (props) => {
  return (
    <div
      className={`popup-box popup-box_type_open ${
        props.isOpen ? "popup-box_opened" : ""
      } `}
    >
      <div className="popup-box__container popup-box__container_enlarge">
        <img
          className="popup-box__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <p className="popup-box__text">{props.card.name}</p>
      </div>
      <button
        type="button"
        className="popup-box__close-btn popup-box__close-btn_enlarge"
        aria-label="Close"
        onClick={props.onClose}
      ></button>
    </div>
  );
};
