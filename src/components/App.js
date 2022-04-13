import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isSelectedCard, setIsSelectedCard] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleDeleteCardClick() {
    setIsDeleteCardPopupOpen(true);
  }

  function handleCardClick(card) {
    setIsSelectedCard(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setIsSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onEditAvatarClick={handleEditAvatarClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onDeleteClick={handleDeleteCardClick}
      />
      <Footer />

      {/* Form for changing avatar picture */}
      <PopupWithForm
        name="change"
        title="Change profile picture"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Save"
      >
        <input
          id="url-input-avatar"
          type="url"
          name="image-link"
          placeholder="Image link"
          className="popup-box__input popup-box__input_type_image-link"
          required
        />
        <span className="url-input-avatar-error popup-box__error"></span>
      </PopupWithForm>

      {/* edit profile popup box */}
      <PopupWithForm
        name="edit"
        title="Edit profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Save"
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
        />
        <span className="about-input-error popup-box__error"></span>
      </PopupWithForm>

      {/* Form for Adding a Card */}
      <PopupWithForm
        name="add"
        title="New Place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Create"
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
        />
        <span className="title-input-error popup-box__error"></span>
        <input
          id="url-input"
          type="url"
          name="image-link"
          placeholder="Image link"
          className="popup-box__input popup-box__input_type_image-link"
          required
        />
        <span className="url-input-error popup-box__error"></span>
      </PopupWithForm>

      {/* Popup for deleting a card */}
      <PopupWithForm
        name="delete"
        title="Are you sure?"
        onClose={closeAllPopups}
        isOpen={isDeleteCardPopupOpen}
        buttonText="Yes"
      />

      {/* Opening the Picture Popup */}
      <ImagePopup
        isOpen={isSelectedCard}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}
export default App;
