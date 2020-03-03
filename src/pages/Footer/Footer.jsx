import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="container d-flex align-items-center footer">
        <div className="footer__nav__contact">
          <div className="footer__image">
            <img src="image/logo-final-2.png" alt="logo-final" />
          </div>
          <div className="footer__link">
            <img src="image/phone-icon-footer.png" alt="phone-footer" />
            <a href="#"> +7 (4872) 71-71-71</a>
          </div>
          <div className="footer__link">
            <img src="image/location-icon-footer.png" alt="location-footer" />
            <a href="#"> г. Тула, ул. Пузакова, 44</a>
          </div>
          <div className="footer__link">
            <img src="image/mail-icon.png" alt="mail" />
            <a href="#"> shop@mykengu.ru</a>
          </div>
        </div>
        <div className="footer__nav">
          <div className="footer__link">
            <a href="#">Корм для кошек</a>
          </div>
          <div className="footer__link">
            <a href="#">Игрушки для кошек</a>
          </div>
          <div className="footer__link">
            <a href="#">Витамины для кошек</a>
          </div>
          <div className="footer__link">
            <a href="#">Когтеточки и комплексы</a>
          </div>
          <div className="footer__link">
            <a href="#">Переноски для кошек</a>
          </div>
        </div>
        <div className="footer__nav">
          <div className="footer__link">
            <a href="#">Корм для собак</a>
          </div>
          <div className="footer__link">
            <a href="#">Игрушки для собак</a>
          </div>
          <div className="footer__link">
            <a href="#">Витамины для собак</a>
          </div>
          <div className="footer__link">
            <a href="#">Кости и лакомства</a>
          </div>
          <div className="footer__link">
            <a href="#">Ошейники, поводки и шлейки</a>
          </div>
        </div>
        <div className="footer__nav">
          <div className="footer__link">
            <a href="#">Грызуны</a>
          </div>
          <div className="footer__link">
            <a href="#">Рыбы</a>
          </div>
          <div className="footer__link">
            <a href="#">Птицы</a>
          </div>
          <div className="footer__link">
            <a href="#">Сельхоз животное</a>
          </div>
        </div>
        <div className="footer__nav">
          <div className="footer__link">
            <a href="#">О компании</a>
          </div>
          <div className="footer__link">
            <a href="#">Контакты</a>
          </div>
          <div className="footer__link">
            <a href="#">Доставка</a>
          </div>
        </div>
        <div className="footer__nav">
          <div className="footer__link">
            <a href="#">Оплата</a>
          </div>
          <div className="footer__link">
            <a href="#">Личный кабинет</a>
          </div>
          <div className="footer__link">
            <a href="#">Акции</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
