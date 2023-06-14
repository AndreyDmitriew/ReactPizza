import React, { useEffect, useState } from 'react';

import { CURRENCY } from '@constants/constants';
import plusOrange from '@assets/plusOrange.svg';
import { addPizza } from '@store/pizzaSlice';
import { ContentItemType, SizesPizzaType } from '@ts/types/types';
import PizzaSize from './pizzaSize/PizzaSize';
import PizzaType from './pizzaType/PizzaType';
import { useAppDispatch } from '../../hook';

import './ContentItem.scss';

export default function ContentItem({ pizza, order }: ContentItemType) {
  const typeOfPizza: string = Object.keys(pizza.price)[0];
  const [type, setType] = useState<string>(typeOfPizza);
  const [size, setSize] = useState<26 | 30 | 40>(() => {
    const firstPizzaType = Object.keys(
      pizza.price
    )[0] as keyof typeof pizza.price;
    return Object.keys(
      pizza.price[firstPizzaType] || ({} as Record<SizesPizzaType, number>)
    )[0] as unknown as SizesPizzaType;
  });

  const [price, setPrice] = useState(0);
  const count = order.find((e) => e.pizza.id === pizza.id)?.params?.count || 0;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentPizzaType = pizza?.price[type as keyof typeof pizza.price];
    const pizzaPrice = (currentPizzaType && currentPizzaType[size]) || 0;
    setPrice(pizzaPrice);
  }, [type, size, count]);

  const addPizzaToStore = () => {
    dispatch(
      addPizza({
        pizza,
        params: {
          price,
          count: Number(count) + 1,
          type,
          size,
        },
      })
    );
  };

  return (
    <article className="content-item-container">
      <img className="pizza" alt="Pizza" src={pizza.image} />
      <h3 className="item-name">{pizza.name}</h3>
      <div className="toggle-set">
        <div className="form-radio-group">
          <PizzaType pizza={pizza} type={type} onChange={setType} />
        </div>
        <div className="form-radio-group">
          <PizzaSize pizza={pizza} type={type} size={size} onChange={setSize} />
        </div>
      </div>
      <div className="price-container">
        <p className="price">
          цена {price}
          {CURRENCY}
        </p>

        {count ? (
          <button type="button" className="added" onClick={addPizzaToStore}>
            <img alt="shopping cart" src={plusOrange} />
            <p className="add-button-name">Добавить</p>
            <div className="notification-round-container">
              <span className="notification-container-text">{count}</span>
            </div>
          </button>
        ) : (
          <button type="button" className="added" onClick={addPizzaToStore}>
            <img alt="shopping cart" src={plusOrange} />
            <p className="add-button-name">Добавить</p>
          </button>
        )}
      </div>
    </article>
  );
}
