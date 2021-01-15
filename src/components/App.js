import React, {useState} from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(props) {
    setSelectedCard(props);
  }

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
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />

      <Main
        isEditAvatarPopupOpen={handleEditAvatarClick}
        isEditProfilePopupOpen={handleEditProfileClick}
        isAddPlacePopupOpen={handleAddPlaceClick}
        onCardClick={handleCardClick}
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

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title="Новое место"
        name="add-place"
        buttonName="Создать"
      >
        <input
          required
          name="place-name"
          type="text"
          className="popup-new-place__description popup__input popup__name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
        />
        <span
          id="place-name-error"
          className="error">
        </span>
        <input
          required
          name="place-link"
          type="url"
          className="popup-new-place__image-link popup__input popup__job"
          placeholder="Ссылка на картинку"
        />
        <span
          id="place-link-error"
          className="error">
        </span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit-profile"
        title="Редактировать профиль"
        buttonName="Сохранить"
      >
        <input
          required
          name="profile-name"
          type="text"
          className="popup__name popup__input"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
        />
        <span
          id="profile-name-error"
          className="error">
        </span>
        <input
          required
          name="profile-job"
          type="text"
          className="popup__job popup__input"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
        />
        <span
          id="profile-job-error"
          className="error">
        </span>

      </PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        name="confirm-delete"
        title="Вы уверены?"
        buttonName="Да"
      >
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>

      // <div className="popup popup__error">
      //   <div className="popup__container">
      //     <button type="button" className="popup__close"></button>
      //     <h2 className="popup__title popup__title_error">Ошибка</h2>
      //     <p className="popup__error-text"></p>
      //     <button type="submit" className="popup__button popup__error-button popup__button-confirm">Закрыть</button>
      //   </div>
      // </div>
  );
}

export default App;
