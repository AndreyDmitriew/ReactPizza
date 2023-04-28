import React, { FC } from 'react';

import { THIN, TRADITIONAL } from '../../../constants/constants';
import { sizes, types } from '../../../ts/enums/enums';

export default function pizzaType(price) {
  const pizzaTypes = [THIN, TRADITIONAL];

  // const changeParameter: FC<ChangeParameterType> = (
  //   type,
  //   isTypeAvailable,
  //   pizzaType
  // ) => {
  //   setParameters({ ...parameters, dough: pizzaType });
  // };
  console.log(price, 'price');

  return pizzaTypes.map((pizzaType, index) => {
    const idIndex = `radio-${index + 1}`;
    // const isItemCheck = pizzaType === dough;
    // const isTypeAvailable = !!available.find((el) => el === pizzaType);
    // const containerStyle = isItemCheck
    //   ? 'form-radio-group-item-checked'
    //   : !isTypeAvailable
    //   ? 'form-radio-group-item-unavailable'
    //   : 'form-radio-group-item';

    return (
      <div
      // className={containerStyle}
      // key={pizzaType}
      // onClick={() => changeParameter('dough', isTypeAvailable, pizzaType)}
      >
        <input id={idIndex} type="radio" name="dough" value="1" />
        <label htmlFor={idIndex}>{pizzaType}</label>
      </div>
    );
  });
}
