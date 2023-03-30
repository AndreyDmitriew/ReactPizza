import React from 'react';
import { CURRENCY } from '../../constants/constants';
import shoppingCart from '../../assets/locale/shoppingСart.svg';
import shoppingCartWheel from '../../assets/locale/shoppingCartWheel.svg';
import verticalDivider from '../../assets/locale/verticalDivider.svg';
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
        <button className={props.type}>
          {props.price} {CURRENCY}
          <img
            alt="Vertical divider"
            src={verticalDivider}
            style={{ padding: '0px 15px' }}
          />
          <div className="cart-container">
            <img alt="shopping cart" src={shoppingCart} className="cart" />
            <span className="cart-wheel">
              <img alt="shopping cart" src={shoppingCartWheel} />
              <img alt="shopping cart" src={shoppingCartWheel} />
            </span>
          </div>
          {orderSum}
        </button>
      )}
      {props.type === 'filter' && (
        <button className={props.type}>{props.name}</button>
      )}
    </>
  );
};
