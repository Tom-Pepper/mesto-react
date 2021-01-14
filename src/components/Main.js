import React from 'react';
import api from '../utils/Api';

function Main({isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen}) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    Promise.resolve(api.getUserData())
      .then(res => {
        setUserName(res.name);
      })
      .catch((err) => console.log(err));
  });

  React.useEffect(() => {
    Promise.resolve(api.getUserData())
      .then(res => {
        setUserDescription(res.about);
      })
      .catch((err) => console.log(err));
  });

  React.useEffect(() => {
    Promise.resolve(api.getUserData())
      .then(res => {
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <div className="profile__avatar-wrapper" onClick={isEditAvatarPopupOpen}>
            <button type="button" className="profile__avatar-edit-button"></button>
            <img className="profile__avatar" src={`${userAvatar}`} alt="Аватар пользователя" />
          </div>
          <div className="profile__info">
            <h1 className="profile__info-name">{userName}</h1>
            <p className="profile__info-job">{userDescription}</p>
            <button type="button" className="profile__edit-button" onClick={isEditProfilePopupOpen}></button>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={isAddPlacePopupOpen}></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
