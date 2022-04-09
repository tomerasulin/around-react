export const PopupWithForm = (props) => {
  return (
    <div
      className={`popup-box popup-box_type_${props.name} ${
        props.isOpen ? "popup-box_opened" : ""
      }`}
    >
      <div className="popup-box__container">
        <button
          type="button"
          className="popup-box__close-btn"
          aria-label="Close"
          onClick={props.onClose}
        ></button>
        <form
          className={`popup-box__form popup-box__form_${props.name}`}
          noValidate
        >
          <h3 className="popup-box__title">{props.title}</h3>
          {props.children}
          <button
            type="submit"
            className="popup-box__save-btn"
            aria-label="Save"
            name="save"
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};
