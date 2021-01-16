import React from "react";

function Card({ card, onCardClick }) {

  return (
    <figure className="element">
      <img className="element__image" src={card.link} alt="Фотография места" onClick={_ => onCardClick(card)} />
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
