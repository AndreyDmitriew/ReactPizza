import { CURRENCY } from '@constants/constants';
import { PizzaOrder } from '@ts/types/types';

import React from 'react';
import userOrder from '@components/summaryCart/UserOrder';
import { useAppSelector, useAppDispatch } from '@hook/hook';
import { getSummaryPizzasCount, getTotalPrice } from '../../utils/utils';

import shoppingCart from '../../assets/shoppingСartGrey.svg';
import trash from '../../assets/trash.svg';

import { Button } from '../button/Buttons';

import './SummaryCart.scss';
import { trashAllOrderedPizza } from '../../utils/actions';

export default function SummaryCart() {
  const dispatch = useAppDispatch();
  const order: PizzaOrder[] = useAppSelector((state) => state.pizzas.order);
  const totalPrice = ` ${getTotalPrice(order)} ${CURRENCY}`;
  const summaryPizzasCount = `${getSummaryPizzasCount(order)}шт.`;

  return (
    <main className="main-cart-wrapper">
      <article className="cart-container">
        <div className="cart-name-container">
          <div className="cart-image-container">
            <img alt="shopping cart" src={shoppingCart} className="cart" />
          </div>

          <h3>Корзина</h3>
        </div>

        <button
          type="button"
          className="trash-name-container"
          onClick={() => trashAllOrderedPizza(dispatch)}
        >
          <img alt="trash" src={trash} />
          <p className="trash-name">Очистить корзину</p>
        </button>
      </article>

      {userOrder({ order, dispatch })}

      <div className="summary-text-container">
        <p className="total-count">
          Всего пицц: <strong> {summaryPizzasCount} </strong>
        </p>
        <p className="total-price-title">
          Сумма заказа: <span className="total-price-count">{totalPrice}</span>
        </p>
      </div>

      <div className="button-container">
        <Button name="Вернуться назад" styleButton={'back'} type="button" property="back" path="/"/>
        <Button
          name={'Оплатить сейчас'}
          styleButton={'pay'}
          type="submit"
          property="pay"
        />
      </div>
    </main>
  );
}
