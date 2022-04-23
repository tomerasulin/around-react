import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Main = (props) => {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-box">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          ></div>
          <button
            className="profile__avatar-edit"
            type="button"
            aria-label="edit"
            onClick={props.onEditAvatarClick}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__name-wrapper">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-btn"
              type="button"
              aria-label="Edit"
              onClick={props.onEditProfileClick}
            ></button>
          </div>
          <p className="profile__role">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          aria-label="Add"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {props.cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardDelete={props.onCardDelete}
              onCardLike={props.onCardLike}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
