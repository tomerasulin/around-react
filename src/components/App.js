import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/api";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isSelectedCard, setIsSelectedCard] = useState(false);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

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

  function handleUpdateUser(data) {
    api.editProfile(data).then((newData) => {
      setCurrentUser(newData);
      closeAllPopups();
    });
  }

  function handleUpdateAvatar(avatar) {
    api.updateProfilePic(avatar).then((newData) => {
      setCurrentUser(newData);
      closeAllPopups();
    });
  }

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) =>
        state.filter((currentCard) => currentCard._id !== card._id)
      );
    });
  }

  function handleAddPlaceSubmit(card){
    api.addCard(card).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setIsSelectedCard(false);
  }

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cardData) => {
        setCards(cardData);
      })
      .catch(console.log);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onEditAvatarClick={handleEditAvatarClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onDeleteClick={handleDeleteCardClick}
          cards={cards}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
        />
        <Footer />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

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
    </CurrentUserContext.Provider>
  );
}
export default App;
