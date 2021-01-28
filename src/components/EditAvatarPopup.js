import React, { useRef, useState, useEffect, useContext } from 'react';
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  //Подписываемся на контекст
  const currentUser = useContext(CurrentUserContext);

  //Реф для прямого доступа к DOM-элементу инпута и его значению
  const avatarRef = useRef('');

  //Стейт для аватарки
  const [avatar, setAvatar] = useState('');

  //Установка аватарки пользователя
  useEffect(() => {
    setAvatar(currentUser.avatar)
  }, [currentUser])

  useEffect(() => {
    setAvatar('')
  }, [isOpen])

  function handleChangeAvatar(event) {
    setAvatar(event.target.value)
  }

  //Обработчик сабмита формы (обновление аватарки)
  function handleSubmit(event) {
    event.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return(
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Обновить аватар"
      name="edit-avatar"
      buttonName="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        className="popup__name popup__input"
        type="url"
        name="avatar"
        required
        placeholder="Ссылка на фотографию"
        ref={avatarRef}
        onChange={handleChangeAvatar}
        value={avatar ? avatar : ''}
      />
      <span
        id="avatar-error"
        className="error"
      >
          </span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
