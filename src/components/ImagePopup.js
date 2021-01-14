import React from 'react';

function ImagePopup() {
  return (
    <div className="popup-image popup">
      <div className="popup-image__container">
        <button className="popup__close popup-image__close"></button>
        <div className="popup-image__content-container">
          <figure className="popup-image__photo">
            <img src="" alt="" className="popup-image__preview" />
            <figcaption className="popup-image__title"></figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;