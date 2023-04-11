import React, { useState, FC } from 'react';

import { ChangeParameterType, PizzaType } from '../../ts/types/types';
import { Button } from '../../../src/components/button/Button';
import {
  BIG_PIZZA,
  CURRENCY,
  MIDDLE_PIZZA,
  SMALL_PIZZA,
  THIN,
  TRADITIONAL,
  UNIT_OF_MEASUREMENT,
} from '../../constants/constants';

import './ContentItem.scss';

export const ContentItem: FC<PizzaType> = ({
  id,
  image,
  name,
  dough,
  size,
  available,
  price,
}) => {
  const [parameters, setParameters] = useState({
    id,
    image,
    name,
    dough,
    size,
    available,
    price,
  });

  const pizzaTypes = [THIN, TRADITIONAL];
  const pizzaSizes = [SMALL_PIZZA, MIDDLE_PIZZA, BIG_PIZZA];

  const changeParameter: FC<ChangeParameterType> = (
    type,
    isTypeAvailable,
    pizzaType
  ) => {
    setParameters({ ...parameters, dough: pizzaType });
  };

  const pizzaType = () => {
    return pizzaTypes.map((pizzaType, index) => {
      const idIndex = `radio-${index + 1}`;
      const isItemCheck = pizzaType === dough;
      const isTypeAvailable = !!available.find((el) => el === pizzaType);
      const containerStyle = isItemCheck
        ? 'form-radio-group-item-checked'
        : !isTypeAvailable
        ? 'form-radio-group-item-unavailable'
        : 'form-radio-group-item';

      return (
        <div
          className={containerStyle}
          key={pizzaType}
          onClick={() => changeParameter('dough', isTypeAvailable, pizzaType)}
        >
          <input id={idIndex} type="radio" name="dough" value="1" />
          <label htmlFor={idIndex}>{pizzaType}</label>
        </div>
      );
    });
  };

  const pizzaSize = () => {
    return pizzaSizes.map((pizzaSize, index) => {
      const idIndex = `radio-${index + 1}`;
      const isItemCheck = pizzaSize === size;
      const isSizeAvailable = !!available.find((el) => +el === pizzaSize);
      const containerStyle = isItemCheck
        ? 'form-radio-group-item-checked'
        : !isSizeAvailable
        ? 'form-radio-group-item-unavailable'
        : 'form-radio-group-item';

      return (
        <div
          className={containerStyle}
          key={pizzaSize}
          onClick={() => console.log('Size click!')}
        >
          <input
            id={idIndex}
            type="radio"
            name="radio"
            value={size}
            disabled={!isSizeAvailable}
          />
          <label htmlFor={idIndex} className="unit-of-measurement">
            {pizzaSize} {UNIT_OF_MEASUREMENT}
          </label>
        </div>
      );
    });
  };

  return (
    <article className="content-item-container">
      <img className="pizza" alt="Pizza" src={image} />
      <h3 className="item-name">{name}</h3>

      <div className="toggle-set">
        <div className="form-radio-group">{pizzaType()}</div>
        <div className="form-radio-group">{pizzaSize()}</div>
      </div>

      <div className="price-container">
        <p className="price">
          от {price}
          {CURRENCY}
        </p>
        <Button type={'added'} />
      </div>
    </article>
  );
};
