import React from "react";

const HeaderTop = props => {
  return (
    <div className="header__top">
      <div className="logo">
        <img src="image/logo-final-1.png" alt="logo" />
      </div>
      <div className="contacts">
        <div className="contacts-numder">
          <img src="image/phone-icon.png" alt="phone" />
          <span className="number">+7 (4872) 71-71-71</span>
        </div>
        <div className="contacts-address">
          <img src="image/location-icon.png" alt="location" />
          <span className="address">г. Тула, ул. Пузакова, 44</span>
        </div>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Поиск по товарам" />
        <div className="search">
          <img
            className="search-icon"
            src="image/search-icon.png"
            alt="search"
          />
          <a href="#">Найти</a>
        </div>
      </div>
      <div className="header__private__cabinet">
        <div className="user">
          <img className="user__icon" src="image/user-icon.png" alt="user" />
        </div>
        <div className="private">
          <a className="private__cabinet" href="#">
            Личный кабинет
          </a>
        </div>
      </div>
      <div className="header__basket">
        <div className="cart">
          <img className="cart__icon" src="image/cart-icon.png" alt="cart" />
        </div>
        <div className="basket">
          <a className="basket__link" href="#">
            Корзина
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
