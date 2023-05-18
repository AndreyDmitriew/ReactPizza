import React, { useState, useEffect } from 'react';

import PizzaSize from './pizzaSize/PizzaSize';
import PizzaType from './pizzaType/PizzaType';
import { CURRENCY } from '@constants/constants';
import { useAppDispatch } from '../../hook';
import { addPizza } from '../../storee/pizzaSlice';
import plus from '@assets/plus.svg';

import './ContentItem.scss';

export function ContentItem({ pizza }) {
  const [type, setType] = useState();
  const [size, setSize] = useState(0);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  // const addPizzaToStore = useOrderStore((state: any) => state.addPizza); //any
  const dispatch = useAppDispatch();
  // const getOrder = useOrderStore((state: any) => state.order); //any
  // const incrementPizzaCount = useOrderStore(
  //   (state: any) => state.incrementPizzaCount
  // ); //any

  useEffect(() => {
    const pizzaPrice = Object.values(
      pizza.price[Object.keys(pizza.price)[0]]
    )[0];
    setPrice(count ? pizzaPrice * count : pizzaPrice);
  }, [type, size, count]);

  useEffect(() => {
    setType(Object.keys(pizza.price)[0]);
    setSize(Object.keys(pizza.price[Object.keys(pizza.price)[0]])[0]);
  }, []);

  const addPizzaToStore = () => {
    dispatch(
      addPizza({
        pizza,
        params: {
          price,
          count: count + 1,
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
        {/* <button type="button" className="add" onClick={addPizza}> */}
        <button type="button" className="add" onClick={addPizzaToStore}>
          <img alt="shopping cart" src={plus} />
          <p className="add-button-name">Добавить</p>
        </button>
      </div>
    </article>
  );
}
