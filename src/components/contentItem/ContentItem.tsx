import React, { FC } from 'react';

import pizza from '../../assets/locale/pizza.svg';
import { PizzaType } from '../../ts/types/types';
import './ContentItem.scss';
import {
  BIG_PIZZA,
  CURRENCY,
  MIDDLE_PIZZA,
  SMALL_PIZZA,
  THIN,
  TRADITIONAL,
  UNIT_OF_MEASUREMENT,
} from '../../constants/constants';
import { Button } from '../../../src/components/button/Button';

export const ContentItem: FC<PizzaType> = ({
  id,
  image,
  name,
  dough,
  size,
  price,
}) => {
  return (
    <article className="content-item-container">
      <img className="pizza" alt="Pizza" src={image} />
      <h3 className="item-name">{name}</h3>

      <div className="toggle-set">
        <div className="form-radio-group">
          <div className="form-radio-group-item">
            <input id="radio-1" type="radio" name="dough" value="1" checked />
            <label htmlFor="radio-1">{THIN}</label>
          </div>
          <div className="form-radio-group-item">
            <input id="radio-2" type="radio" name="dough" value="2" />
            <label htmlFor="radio-2">{TRADITIONAL}</label>
          </div>
        </div>

        <div className="form-radio-group">
          <div className="form-radio-group-item">
            <input id="radio-3" type="radio" name="radio" value="3" checked />
            <label htmlFor="radio-3" className="unit-of-measurement">
              {SMALL_PIZZA} {UNIT_OF_MEASUREMENT}
            </label>
          </div>
          <div className="form-radio-group-item">
            <input id="radio-4" type="radio" name="radio" value="4" />
            <label htmlFor="radio-4">
              {MIDDLE_PIZZA} {UNIT_OF_MEASUREMENT}
            </label>
          </div>
          <div className="form-radio-group-item">
            <input id="radio-5" type="radio" name="radio" value="5" />
            <label htmlFor="radio-5">
              {BIG_PIZZA} {UNIT_OF_MEASUREMENT}
            </label>
          </div>
        </div>
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
