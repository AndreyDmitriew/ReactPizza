import { OrderType } from '../../ts/types/types';
import { CURRENCY } from '../../constants/constants';
import { useAppSelector, useAppDispatch } from '../../hook';

import shoppingCart from '../../assets/shoppingСartGrey.svg';
import trash from '../../assets/trash.svg';

import Button from '../button/Button';

import './SummaryCart.scss';
import { useEffect } from 'react';
import { addPizza, deletePizza, decrementPizza } from '../../storee/pizzaSlice';

import { getSummaryPizzasCount, getTotalPrice } from '../../utils/utils';

export function SummaryCart() {
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.pizzas.order);
  const userOrder = () => {
    return order?.map((el: OrderType) => {
      const price = el.params.price * el.params.count;
      const { count } = el.params;
      return (
        <div key={el.id}>
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
                  {el.orderPizzaType} тесто, {el.orderPizzaSize} см.{' '}
                </p>
              </div>
            </div>

            <div className="item-set-container">
              <div className="count">
                <span
                  onClick={() => dispatch(decrementPizza(el))}
                  className="circle minus"
                />
                <p>{count}</p>
                <span
                  onClick={() => dispatch(addPizza(el))}
                  className="circle plus"
                />
              </div>

              <p>
                {price} {CURRENCY}
              </p>

              <span
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

        <div className="trash-name-container">
          <img alt="trash" src={trash} />
          <p className="trash-name">Очистить корзину</p>
        </div>
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
        <Button type="pay" />
      </div>
    </main>
  );
}
