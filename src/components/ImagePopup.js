import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup-image popup ${card ? "popup_is-opened" : null}`}>
      <div className="popup-image__container">
        <button className="popup__close popup-image__close" onClick={onClose}></button>
        <div className="popup-image__content-container">
          <figure className="popup-image__photo">
            <img src={card?.link} alt="Фотография карточки" className="popup-image__preview" />
            <figcaption className="popup-image__title">{card?.name}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
