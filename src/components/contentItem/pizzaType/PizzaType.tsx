import React, { FC } from 'react';

import { THIN, TRADITIONAL } from '../../../constants/constants';

export default function pizzaType(dough: string, available: string[]) {
  const pizzaTypes = [THIN, TRADITIONAL];

  // const changeParameter: FC<ChangeParameterType> = (
  //   type,
  //   isTypeAvailable,
  //   pizzaType
  // ) => {
  //   setParameters({ ...parameters, dough: pizzaType });
  // };

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
        // onClick={() => changeParameter('dough', isTypeAvailable, pizzaType)}
      >
        <input id={idIndex} type="radio" name="dough" value="1" />
        <label htmlFor={idIndex}>{pizzaType}</label>
      </div>
    );
  });
}
