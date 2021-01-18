import React, {useState, useEffect} from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({ isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, onCardClick }) {

  //Стейты для информации о пользователе
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  //Стейт для карточек
  const [cards, setCards] = useState([]);

  //Получаем данные по пользователю и карточки с сервера
  useEffect(() => {
    api.getUserData()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
    api.getCards()
      .then(res => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

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
      <section className="elements">
        {
          cards.map(card => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
            />
          ))
        }
      </section>
    </main>
  );
}

export default Main;
