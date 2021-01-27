import React, {useState, useEffect} from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  //Cтейт для данных пользователя
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    api.getUserData()
      .then(res => {
        setCurrentUser(res)
      })
      .catch(err => console.log(err));
  }, [])

  //Стейты для поп-апов (состояние - открыт / не открыт
  const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  //Стейт для выбранной карточки, исп. в поп-апе картинки в полном размере
  const [selectedCard, setSelectedCard] = useState(null);

  //Обработчик клика по изображению карточки (открытие поп-апа картинки)
  function handleCardClick(props) {
    setSelectedCard(props);
  }

  //Обработчик для отправки данных пользователя на сервер (редактирование данных профиля)
  function handleUpdateUser(user) {
    api.editProfile(user.name, user.about)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(err))
  }

  //Обработчик для обновления аватарки пользователя (отправка на сервер через API)
  function handleUpdateAvatar(user) {
    api.uploadAvatar(user.avatar)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(err))
  }

  //Обработчик кнопки редактирования аватарки
  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
  }

  //Обработчик кнопки редактирования инф-ии профиля
  function handleEditProfileClick() {
    setIsProfilePopupOpen(true);
  }

  //Обработчик кнопки добавления карточки
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  //Обработчик закрытия поп-апов
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsAvatarPopupOpen(false);
    setIsProfilePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />

        <Main
          isEditAvatarPopupOpen={handleEditAvatarClick}
          isEditProfilePopupOpen={handleEditProfileClick}
          isAddPlacePopupOpen={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

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

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

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
    </CurrentUserContext.Provider>
  );
}

export default App;
