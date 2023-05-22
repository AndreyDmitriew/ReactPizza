import { v4 as uuidv4 } from 'uuid';

import { CURRENCY } from '@constants/constants';
import { useNavigate } from 'react-router-dom';
import { PizzaOrder } from '../../ts/types/types';

import { getSummaryPizzasCount, getTotalPrice } from '../../utils/utils';

import { useAppSelector, useAppDispatch } from '../../hook';
import shoppingCart from '../../assets/shoppingСartGrey.svg';
import trash from '../../assets/trash.svg';

import Button from '../button/Button';

import {
  addPizza,
  deletePizza,
  decrementPizza,
  trashAllPizza,
} from '../../store/pizzaSlice';

import './SummaryCart.scss';

export default function SummaryCart() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const order = useAppSelector((state) => state.pizzas.order);
  const submit = () => {
    dispatch(trashAllPizza());
    navigate('/');
  };
  const userOrder = () => {
    return order?.map((el: PizzaOrder) => {
      const price = el.params.price * el.params.count;
      const { count }: number = el.params;

      return (
        <div key={uuidv4()}>
          <div className="item-container">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <img alt="pizza" className="item-image" src={el.pizza.image} />
              <div className="item-name-set">
                <h6 className="item-name">{el.pizza.name}</h6>
                <p className="item-parameters">
                  {el.params.type} тесто, {el.params.size} см.{' '}
                </p>
              </div>
            </div>

            <div className="item-set-container">
              <div className="count">
                <button
                  type="button"
                  aria-label="Minus"
                  onClick={() => dispatch(decrementPizza(el))}
                  className="circle minus"
                />
                <p>{count}</p>
                <button
                  type="button"
                  aria-label="Plus"
                  onClick={() => dispatch(addPizza(el))}
                  className="circle plus"
                />
              </div>

              <p>
                {price} {CURRENCY}
              </p>

              <button
                type="button"
                aria-label="Cross"
                onClick={() => dispatch(deletePizza(el))}
                className="circle-cross cross"
              />
            </div>
          </div>
        </div>
      );
    });
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
          onClick={() => dispatch(trashAllPizza())}
        >
          <img alt="trash" src={trash} />
          <p className="trash-name">Очистить корзину</p>
        </button>
      </article>

      {userOrder()}

      <div className="summary-text-container">
        <p style={{ fontWeight: '400', fontSize: '15px' }}>
          Всего пицц: <strong>{getSummaryPizzasCount(order)}шт.</strong>
        </p>
        <p style={{ fontWeight: '400', fontSize: '15px' }}>
          Сумма заказа:{' '}
          <span style={{ fontWeight: '700', color: 'orange' }}>
            {getTotalPrice(order)} {CURRENCY}
          </span>
        </p>
      </div>

      <div className="button-container">
        <Button type="back" />
        <button onClick={submit} className="pay" type="button">
          <p className="button-pay-title">Оплатить сейчас</p>
        </button>
      </div>
    </main>
  );
}
