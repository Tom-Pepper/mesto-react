import React from 'react';

function handleEditAvatarClick() {
  const editAvatarButton = document.querySelector('.profile__avatar-wrapper');
  const editAvatarPopup = document.querySelector('.popup__edit-avatar');
  editAvatarButton.addEventListener('click', () => editAvatarPopup.classList.add('popup_is-opened'));
} 

function handleEditProfileClick() {
  const editProfileButton = document.querySelector('.profile__edit-button');
  const editProfilePopup = document.querySelector('.popup__edit-profile');
  editProfileButton.addEventListener('click', () => editProfilePopup.classList.add('popup_is-opened'));	
}

function handleAddPlaceClick() {
  const addPlaceButton = document.querySelector('.profile__add-button');
  const addPlacePopup = document.querySelector('.popup-new-place');	
  addPlaceButton.addEventListener('click', () => addPlacePopup.classList.add('popup_is-opened'));
}

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <div className="profile__avatar-wrapper" onClick={handleEditAvatarClick}>
            <button type="button" className="profile__avatar-edit-button"></button>
            <img className="profile__avatar" src="" alt="Аватар пользователя" />
          </div>
          <div className="profile__info">
            <h1 className="profile__info-name">Жак</h1>
            <p className="profile__info-job">Ширак</p>
            <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}
  
export default Main;