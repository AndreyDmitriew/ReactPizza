import React, { useState, FC, useEffect } from 'react';

import Button from '@components/button/Button';
import { ChangeParameterType } from '../../ts/types/types';
// import Button from '../../../src/components/button/Button';
import PizzaSize from './pizzaSize/PizzaSize';
import PizzaType from './pizzaType/PizzaType';
import {
  CURRENCY,
  MIDDLE_PIZZA,
  THIN,
  TRADITIONAL,
} from '../../constants/constants';
import { useAppDispatch } from '../../hook';
import { addPizza } from '../../storee/pizzaSlice';

import './ContentItem.scss';
import plus from '@assets/plus.svg';
import { useOrderStore, usePizzasStore } from '../../store/usePizzasStore';

// export const ContentItem: FC<PizzaType> = ({
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
    // setCount((prevState) => prevState + 1);
    // const isAlreadyOrdered = !!getOrder.find(({id}) => id === pizza.id);
    //
    // if (isAlreadyOrdered) {
    //   incrementPizzaCount(pizza.id);
    // } else {
    dispatch(
      addPizza({
        pizza,
        params: {
          price,
          count: count + 1,
        },
      })
    );
    // }
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
          от {price}
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
