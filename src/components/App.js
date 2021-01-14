import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsAvatarPopupOpen(false);
    setIsProfilePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />

      <Main 
        isEditAvatarPopupOpen={handleEditAvatarClick}
        isEditProfilePopupOpen={handleEditProfileClick}
        isAddPlacePopupOpen={handleAddPlaceClick}
      />

      <Footer />

      <PopupWithForm 
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title="Обновить аватар"
        name="edit-avatar"
        buttonName="Сохранить"
      >
        <input
          className="popup__name popup__input"
          type="url"
          name="avatar"
          required
          placeholder="Ссылка на фотографию"
        />
        <span
          id="avatar-error"
          className="error"
        >
        </span>
      </PopupWithForm>
        

      <ImagePopup />
    </div>

      // <div className="popup popup__error">
      //   <div className="popup__container">
      //     <button type="button" className="popup__close"></button>
      //     <h2 className="popup__title popup__title_error">Ошибка</h2>
      //     <p className="popup__error-text"></p>
      //     <button type="submit" className="popup__button popup__error-button popup__button-confirm">Закрыть</button>
      //   </div>
      // </div>

      // <div className="popup-image popup">
      //   <div className="popup-image__container">
      //     <button className="popup__close popup-image__close"></button>
      //     <div className="popup-image__content-container">
      //       <figure className="popup-image__photo">
      //         <img src="" alt="" className="popup-image__preview" />
      //         <figcaption className="popup-image__title"></figcaption>
      //       </figure>
      //     </div>
      //   </div>
      // </div>
  );
}

export default App;
