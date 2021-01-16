import React from 'react';

function PopupWithForm({ isOpen, onClose, name, title, children, submitForm, buttonName }) {
  return (
      <div className={`popup popup_type_${name} ${isOpen && "popup_is-opened"}`}>
        <div className="popup__container">
          <button type="button" className="popup__close" onClick={onClose}></button>
          <h2 className="popup__title">{title}</h2>
          <form name={`${name}`} method="post" className="popup__form">
            {children}
            <button type="submit" className="popup__button" onClick={submitForm}>{buttonName}</button>
          </form>
        </div>
      </div>
  );
}

export default PopupWithForm;
