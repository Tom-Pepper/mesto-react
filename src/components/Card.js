import React from "react";

function Card({ card, onCardClick }) {

  function handleCardClick() {
    onCardClick(card)
  }

  return (
    <figure className="element">
      <img className="element__image" src={card.link} alt="Фотография места" onClick={handleCardClick} />
      <button type="button" className="element__delete-button"></button>
      <figcaption className="element__caption">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-wrapper">
          <button type="button" className="element__like-button"></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </figcaption>
    </figure>
  )
}


export default Card;
