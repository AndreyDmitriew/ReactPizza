import React, { useState, FC } from 'react';

import { ChangeParameterType, PizzaType } from '../../ts/types/types';
import Button from '../../../src/components/button/Button';
import pizzaSize from './pizzaSize/PizzaSize';
import pizzaType from './pizzaType/PizzaType';
import { CURRENCY, THIN, TRADITIONAL } from '../../constants/constants';

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

  return (
    <article className="content-item-container">
      <img className="pizza" alt="Pizza" src={image} />
      <h3 className="item-name">{name}</h3>

      <div className="toggle-set">
        <div className="form-radio-group">{pizzaType(dough, available)}</div>
        <div className="form-radio-group">{pizzaSize(size, available)}</div>
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
