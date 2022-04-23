import PopupWithForm from "./PopupWithForm";
import React, { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const EditProfilePopup = ({onUpdateUser, isOpen, onClose}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Prevent the browser from navigating to the form address
    e.preventDefault();
    // Pass the values of the managed components to the external handler
    onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="edit"
      title="Edit profile"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Save"
      onSubmit={handleSubmit}
    >
      <input
        id="name-input"
        type="text"
        name="name"
        placeholder="Name"
        className="popup-box__input popup-box__input_type_name"
        required
        minLength="2"
        maxLength="40"
        value={name}
        onChange={handleChangeName}
      />
      <span className="name-input-error popup-box__error"></span>
      <input
        id="about-input"
        type="text"
        name="about"
        placeholder="About me"
        className="popup-box__input popup-box__input_type_about"
        required
        minLength="2"
        maxLength="200"
        value={description}
        onChange={handleChangeDescription}
      />
      <span className="about-input-error popup-box__error"></span>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
