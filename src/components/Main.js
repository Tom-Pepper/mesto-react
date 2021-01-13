import React from 'react';

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <div className="profile__avatar-wrapper">
            <button type="button" className="profile__avatar-edit-button"></button>
            <img className="profile__avatar" src="" alt="Аватар пользователя" />
          </div>
          <div className="profile__info">
            <h1 className="profile__info-name">Жак</h1>
            <p className="profile__info-job">Ширак</p>
            <button type="button" className="profile__edit-button"></button>
          </div>
        </div>
        <button type="button" className="profile__add-button"></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}
  
export default Main;