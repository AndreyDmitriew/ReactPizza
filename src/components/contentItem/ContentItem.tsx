import React, { useEffect, useState } from 'react';
import { CURRENCY } from '@constants/constants';
import { ContentItemType, SizesPizzaType } from '@ts/types/types';
import { Button } from '@components/button/Buttons';
import PizzaSize from './pizzaSize/PizzaSize';
import PizzaType from './pizzaType/PizzaType';

import './ContentItem.scss';

export default function ContentItem({ pizza, order }: ContentItemType) {
  const [type, setType] = useState<string>('thin');
  const [size, setSize] = useState<26 | 30 | 40>(26);
  const [price, setPrice] = useState(0);

  const count = order.find((e) => e.pizza.id === pizza.id)?.params?.count || 0;

  useEffect(() => {
    const typeOfPizza: string = Object.keys(pizza.price)[0];
    setType(typeOfPizza);

    const firstPizzaType = Object.keys(
      pizza.price
    )[0] as keyof typeof pizza.price;

    const sizeAndType = pizza.price[firstPizzaType];
    const defaultEmptyObj = {} as Record<SizesPizzaType, number>;
    const pizzaSize = Object.keys(
      sizeAndType || defaultEmptyObj
    )[0] as unknown as SizesPizzaType;

    setSize(pizzaSize);
  }, []);

  useEffect(() => {
    const currentPizzaType = pizza?.price[type as keyof typeof pizza.price];
    const pizzaPrice = (currentPizzaType && currentPizzaType[size]) || 0;
    setPrice(pizzaPrice);
  }, [type, size, count]);

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
          <Button
            name="Добавить"
            styleButton="added"
            type="button"
            property="added"
            count={count}
            pizza={pizza}
            price={price}
            size={size}
          />
        ) : (
          <Button
            name="Добавить"
            styleButton="add"
            type="button"
            property="add"
            count={count}
            pizza={pizza}
            price={price}
            size={size}
          />
        )}
      </div>
    </article>
  );
}
