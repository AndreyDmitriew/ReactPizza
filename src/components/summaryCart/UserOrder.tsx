import { PizzaOrder } from '@ts/types/types.js';
import { v4 as uuidv4 } from 'uuid';
import { decrementPizza, addPizza, deletePizza } from '@store/pizzaSlice.js';
import { CURRENCY } from '@constants/constants.js';
import React from 'react';
import { PayloadAction } from '@reduxjs/toolkit';

export default function userOrder({
  order,
  dispatch,
}: {
  order: PizzaOrder[];
  dispatch: (pizza: PayloadAction<PizzaOrder>) => void;
}) {
  return order?.map((el: PizzaOrder) => {
    const price = el.params.price * el.params.count;
    const { count } = el.params;

    return (
      <div key={uuidv4()}>
        <div className="item-container">
          <div className="item-group">
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
}
