import React from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(avatarRef);

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  return (
    <PopupWithForm
      name="change"
      title="Change profile picture"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Save"
      onSubmit={handleSubmit}
    >
      <input
        id="url-input-avatar"
        type="url"
        name="image-link"
        placeholder="Image link"
        className="popup-box__input popup-box__input_type_image-link"
        ref={avatarRef}
        required
      />
      <span className="url-input-avatar-error popup-box__error"></span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
