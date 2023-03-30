import React, { FC } from 'react';

import pizza from '../../assets/locale/pizza.svg';
import { PizzaType } from '../../ts/types/types';
import './ContentItem.scss';

export const ContentItem: FC<PizzaType> = ({
  image,
  name,
  dough,
  size,
  price,
}) => {
  return (
    <article className="content-item-container">
      <img className="pizza" alt="Pizza" src={pizza} />
      <h5>{name}</h5>
      <div>
        <input
          id="toggle-on"
          className="toggle toggle-left"
          name="toggle"
          value="false"
          type="radio"
          checked
        />
        <label htmlFor="toggle-on" className="btn">
          Yes
        </label>
        <input
          id="toggle-off"
          className="toggle toggle-right"
          name="toggle"
          value="true"
          type="radio"
        />
        <label htmlFor="toggle-off" className="btn">
          No
        </label>
      </div>

      <div>
        <p>от 395 Р</p>
        <button>добавить</button>
      </div>
    </article>
  );
};
