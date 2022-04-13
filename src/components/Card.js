const Card = (props) => {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <button
        type="button"
        className="element__delete-btn"
        aria-label="Delete"
        onClick={props.onDeleteClick}
      ></button>
      <div
        className="element__image"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={handleClick}
      ></div>
      <div className="element__group">
        <h2 className="element__text">{props.card.name}</h2>
        <div className="element__likes-box">
          <button
            className="element__like-btn"
            type="button"
            aria-label="Like"
          ></button>
          <p className="element__show-likes">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;