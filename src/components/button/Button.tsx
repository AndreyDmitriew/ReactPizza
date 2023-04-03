import React from 'react';
import { CURRENCY } from '../../constants/constants';
import shoppingCart from '../../assets/locale/shoppingСart.svg';
import shoppingCartWheel from '../../assets/locale/shoppingCartWheel.svg';
import verticalDivider from '../../assets/locale/verticalDivider.svg';
import plus from '../../assets/locale/plus.svg';
import plusOrange from '../../assets/locale/plusOrange.svg';
import arrowBack from '../../assets/locale/arrowBack.svg';
import { BrowserRouter, NavLink, Routes } from 'react-router-dom';
import './Button.scss';

type args = {
  price?: number;
  name?: string;
  type: string;
};

export const Button = (props: args) => {
  const orderSum: number = 3;

  return (
    <>
      {props.type === 'summary' && (
        <NavLink   to={'/summary'} >
          <button className={props.type}>
          {props.price} {CURRENCY}
          <img
            alt="Vertical divider"
            src={verticalDivider}
            style={{ padding: '0px 15px' }}
          />
            <img alt="shopping cart" src={shoppingCart} className="cart" />
          {orderSum}
          </button>
        </NavLink >
      )}

      {props.type === 'filter' && (
        <button className={props.type}>{props.name}</button>
      )}

      {props.type === 'add' && (
        <button className={props.type}>
          <img alt="shopping cart" src={plus} />
          <p className="add-button-name">Добавить</p>
        </button>
      )}

      {props.type === 'added' && (
        <button className={props.type}>
          <img alt="shopping cart" src={plusOrange} />
          <p className="add-button-name">Добавить</p>
          <div className="notification-round-container">
            <span className="notification-container-text">2</span>
          </div>
        </button>
      )}

      {props.type === 'back' && (
          <NavLink to={'/'} >
            <button className={props.type}>
              <img
                  alt="back"
                  src={arrowBack}
              />
            <p className="button-back-title">Вернуться назад</p>
            </button>
          </NavLink>
      )}

      {props.type === 'pay' && (
          <NavLink to={'/'} >
            <button className={props.type}>
              <p className="pay">Оплатить сейчас</p>
            </button>
          </NavLink>
      )}
    </>
  );
};
