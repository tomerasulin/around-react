import React, { useState, useEffect } from "react";

import { api } from "../utils/api";
import { Card } from "./Card";

export const Main = (props) => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .init()
      .then(([cardData, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardData);
      })
      .catch(console.log);
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-box">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
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
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-btn"
              type="button"
              aria-label="Edit"
              onClick={props.onEditProfileClick}
            ></button>
          </div>
          <p className="profile__role">{userDescription}</p>
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
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onDeleteClick={props.onDeleteClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};
