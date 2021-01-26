import React, {useState, useEffect, useContext} from 'react';
import api from '../utils/api';
import Card from './Card';
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({ isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, onCardClick }) {
  //Подписка на контекст CurrentUserContext
  const currentUser = useContext(CurrentUserContext);

  //Стейт для карточек
  const [cards, setCards] = useState([]);

  //Получаем данные по пользователю и карточки с сервера
  useEffect(() => {
    api.getCards()
      .then(res => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  //Функция лайка карточки
  function handleCardLike(card) {
    //Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    })
      .catch(err => console.log(err));
  }

  //Функция удаления карточки, по аналогии с функцией лайка
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards.filter(item => item._id !== card._id));
      })
      .catch(err => console.log(err));
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <div className="profile__avatar-wrapper" onClick={isEditAvatarPopupOpen}>
            <button type="button" className="profile__avatar-edit-button"></button>
            <img className="profile__avatar" src={`${currentUser.avatar}`} alt="Аватар пользователя" />
          </div>
          <div className="profile__info">
            <h1 className="profile__info-name">{currentUser.name}</h1>
            <p className="profile__info-job">{currentUser.about}</p>
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
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))
        }
      </section>
    </main>
  );
}

export default Main;
