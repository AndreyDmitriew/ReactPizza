import React, { useState, FC } from 'react';

import Button from '@components/button/Button';
import { ChangeParameterType, PizzaType } from '../../ts/types/types';
// import Button from '../../../src/components/button/Button';
import pizzaSize from './pizzaSize/PizzaSize';
import pizzaType from './pizzaType/PizzaType';
import { CURRENCY, THIN, TRADITIONAL } from '../../constants/constants';

import './ContentItem.scss';

// export const ContentItem: FC<PizzaType> = ({
export function ContentItem({ pizza }) {
  // const [parameters, setParameters] = useState({
  //   id,
  //   image,
  //   name,
  //   dough,
  //   size,
  //   available,
  //   price,
  // });
  // const { image, name, dough, size, available, price } = pizza;
  const {id, image, name, price } = pizza;
  // const price = Object.values(Object.values(pizza.preorder)[0])
  //   console.log(Object.values(Object.values(pizza.preorder)[0]), 'pizza')
    // const [pizzaOrder, setPizzaOrder] = useState(pizza);

  return (
    <article className="content-item-container">
      <img className="pizza" alt="Pizza" src={image} />
      <h3 className="item-name">{name}</h3>

      <div className="toggle-set">
        {/*<div className="form-radio-group">{pizzaType(id, price)}</div>*/}
        <div className="form-radio-group">{pizzaType(pizza)}</div>
        <div className="form-radio-group">{pizzaSize(pizza)}</div>
      </div>

      <div className="price-container">
        <p className="price">
           от {Object.values(Object.values(pizza.preorder)[0])}
          {CURRENCY}
        </p>
        <Button type="add" />
      </div>
    </article>
  );
}
