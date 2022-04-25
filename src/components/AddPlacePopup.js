import PopupWithForm from "./PopupWithForm";
import React from "react";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const [title, setTitle] = React.useState("");
  const [url, setUrl] = React.useState("");

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeUrl(e) {
    setUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: title,
      link: url,
    });
  }

  React.useEffect(() => {
    setTitle("");
    setUrl("");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="New Place"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Create"
      onSubmit={handleSubmit}
    >
      <input
        id="title-input"
        type="text"
        name="title"
        placeholder="Title"
        className="popup-box__input popup-box__input_type_title"
        required
        minLength="1"
        maxLength="30"
        value={title}
        onChange={handleChangeTitle}
      />
      <span className="title-input-error popup-box__error"></span>
      <input
        id="url-input"
        type="url"
        name="image-link"
        placeholder="Image link"
        className="popup-box__input popup-box__input_type_image-link"
        required
        value={url}
        onChange={handleChangeUrl}
      />
      <span className="url-input-error popup-box__error"></span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
