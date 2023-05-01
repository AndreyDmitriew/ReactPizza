import React, {FC, useEffect, useState} from 'react';

import { THIN, TRADITIONAL } from '../../../constants/constants';
import { sizes, types } from '../../../ts/enums/enums';
import {useOrderStore, usePizzasStore} from "../../../store/usePizzasStore";

export default function pizzaType(pizza) {
  const pizzaTypes = [THIN, TRADITIONAL];
  const getPizzas = usePizzasStore((state: any) => state); //any
  const order = useOrderStore((state: any) => state.order); //any
  const pizzasState = usePizzasStore((state: any) => state.pizzas); //any
  const handleUpdateType = usePizzasStore(
      (state: any) => state.handleUpdateType
  ); //any


  const changeParameter = (pizzaType) => {
    // const updatedState = pizzasState.find((item)=>)
    const updatedState = pizzasState.map((item) => {
    // console.log(  Object.values(item.preorder)[0] , 'itemm')
    // console.log(  Object.keys(item.preorder)[0]   , 'item')
      if (item.id === pizza.id) {
        return {
          ...item,
          preorder: {[pizzaType]:Object.values(item.preorder)[0]},
        };
      }
      return item;
    });
    handleUpdateType(updatedState)
    // console.log(pizzasState, 'pizzasStatepizzasState')
  }
  // console.log(id, 'id');
  // console.log(order, 'order');

  // useEffect(() => {
  //   console.log(pizza, '!!!!!!!')
  // },[pizza, pizzasState])

  return pizzaTypes.map((pizzaType, index) => {
    const idIndex = `radio-${index + 1}`;
    //
    const isOrdered = order.find((order: object)=> order.id === pizza.id )?.price
    // const isItemCheck = isOrdered && Object.keys(isOrdered)[0] === pizzaType

    const isItemCheck = Object.keys(pizza.preorder)[0] === pizzaType
    //
    const isNotOrderedAndFirst = !isOrdered && pizza.price?.hasOwnProperty(pizzaType) && Object.keys(pizza.price)[0] === pizzaType
    // console.log(isNotOrderedAndFirst, 'isNotOrderedAndFirst')
    // console.log(price, 'price')
    // console.log(isItemCheck, 'isItemCheck')
    // console.log(price.hasOwnProperty(pizzaType), 'price.hasOwnProperty(pizzaType)')


    const containerStyle = isItemCheck
      ? 'form-radio-group-item-checked'
      : isNotOrderedAndFirst ? 'form-radio-group-item-checked'
      : !pizza.price.hasOwnProperty(pizzaType)
      ? 'form-radio-group-item-unavailable'
      : 'form-radio-group-item';

    // if(isType) {
    //
    // }
    // const isItemCheck = pizzaType === dough;
    // const isTypeAvailable = !!available.find((el) => el === pizzaType);
    // const containerStyle = isItemCheck
    //   ? 'form-radio-group-item-checked'
    //   : !isTypeAvailable
    //   ? 'form-radio-group-item-unavailable'
    //   : 'form-radio-group-item';

    return (
      <div
      className={containerStyle}
      key={pizzaType}
      onClick={() => changeParameter(pizzaType)}
      >
        <input id={idIndex} type="radio" name="dough" value="1" />
        <label htmlFor={idIndex}>{pizzaType}</label>
      </div>
    );
  });
}
