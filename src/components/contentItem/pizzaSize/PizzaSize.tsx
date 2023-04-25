import React from 'react';

import {
  BIG_PIZZA,
  MIDDLE_PIZZA,
  SMALL_PIZZA,
  UNIT_OF_MEASUREMENT,
} from '../../../constants/constants';

export default function pizzaSize(size: number, available: string[]) {
  const pizzaSizes = [SMALL_PIZZA, MIDDLE_PIZZA, BIG_PIZZA];
  return pizzaSizes.map((pizzaSize, index) => {
    const idIndex = `radio-${index + 1}`;
    const isItemCheck = pizzaSize === size;
    const isSizeAvailable = !!available.find((el) => +el === pizzaSize);
    const containerStyle = isItemCheck
      ? 'form-radio-group-item-checked'
      : !isSizeAvailable
      ? 'form-radio-group-item-unavailable'
      : 'form-radio-group-item';

    return (
      <div
        className={containerStyle}
        key={pizzaSize}
        onClick={() => console.log('Size click!')}
      >
        <input
          id={idIndex}
          type="radio"
          name="radio"
          value={size}
          disabled={!isSizeAvailable}
        />
        <label htmlFor={idIndex} className="unit-of-measurement">
          {pizzaSize} {UNIT_OF_MEASUREMENT}
        </label>
      </div>
    );
  });
}
