import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
    <Header />

    <Main />

    <Footer />

    <div className="popup popup__edit-profile">
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h2 className="popup__title">Редактировать&nbsp;профиль</h2>
        <form name="profile-edit" method="post" className="popup__form">
          <input required name="profile-name" type="text" className="popup__name popup__input" placeholder="Имя"
                 minlength="2" maxlength="40" />
          <span id="profile-name-error" className="error"></span>
          <input required name="profile-job" type="text" className="popup__job popup__input" placeholder="О себе"
                 minlength="2" maxlength="200" />
          <span id="profile-job-error" className="error"></span>
          <button type="submit" className="popup__button">Сохранить</button>
        </form>
      </div>
    </div>

    <div className="popup-new-place popup">
      <div className="popup__container">
        <button type="button" className="popup__close popup-new-place__close"></button>
        <h2 className="popup__title">Новое место</h2>
        <form name="profile-add-place" method="post" className="popup-new-place__form popup__form">
          <input required name="place-name" type="text" className="popup-new-place__description popup__input popup__name"
                 placeholder="Название" minlength="2" maxlength="30" />
          <span id="place-name-error" className="error"></span>
          <input required name="place-link" type="url" className="popup-new-place__image-link popup__input popup__job"
                 placeholder="Ссылка на картинку" />
          <span id="place-link-error" className="error"></span>
          <button type="submit" className="popup__button">Создать</button>
        </form>
      </div>
    </div>

    <div className="popup popup__confirm-delete">
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h2 className="popup__title popup__title_confirm-delete">Вы уверены?</h2>
        <button type="submit" className="popup__button popup__button-confirm">Да</button>
      </div>
    </div>

    <div className="popup popup__error">
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h2 className="popup__title popup__title_error">Ошибка</h2>
        <p className="popup__error-text"></p>
        <button type="submit" className="popup__button popup__error-button popup__button-confirm">Закрыть</button>
      </div>
    </div>

    <div className="popup popup__edit-avatar">
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h2 className="popup__title">Обновить аватар</h2>
        <form name="avatar-edit" method="post" className="popup__form-edit-avatar popup__form" novalidate>
          <input required name="avatar" type="url" className="popup__name popup__input" placeholder="Ссылка на фотографию" />
          <span id="avatar-error" className="error"></span>
          <button type="submit" className="popup__button">Сохранить</button>
        </form>
      </div>
    </div>

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
  </div>
  );
}

export default App;
