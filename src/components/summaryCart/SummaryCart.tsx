import { CURRENCY } from '@constants/constants';
import { useNavigate } from 'react-router-dom';
import { PizzaOrder } from '@ts/types/types';

import {
  trashAllPizza,
} from '@store/pizzaSlice';
import React from 'react';
import { getSummaryPizzasCount, getTotalPrice } from '../../utils/utils';

import { useAppSelector, useAppDispatch } from '@hook/hook';
import shoppingCart from '../../assets/shoppingСartGrey.svg';
import trash from '../../assets/trash.svg';

import { BackButton } from '../button/Buttons';

import './SummaryCart.scss';
import { trashAllOrderedPizza } from '../../utils/actions';
import userOrder from '@components/summaryCart/UserOrder';

export default function SummaryCart() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const order: PizzaOrder[] = useAppSelector((state) => state.pizzas.order);
  const totalPrice = ` ${getTotalPrice(order)} ${CURRENCY}`;
  const summaryPizzasCount = `${getSummaryPizzasCount(order)}шт.`;

  const submit = () => {
    dispatch(trashAllPizza());
    navigate('/');
  };

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
        <BackButton />
        <button onClick={submit} className="pay" type="button">
          <p className="button-pay-title">Оплатить сейчас</p>
        </button>
      </div>
    </main>
  );
}
