import {
  BIG_PIZZA,
  MIDDLE_PIZZA,
  SMALL_PIZZA,
  UNIT_OF_MEASUREMENT,
} from '@constants/constants';
import { v4 as uuidv4 } from 'uuid';
import { PizzaSizeType, SizesPizzaType } from '@ts/types/types';

export default function PizzaSize({
  pizza,
  type,
  size,
  onChange,
}: PizzaSizeType) {
  const pizzaSizes: SizesPizzaType[] = [SMALL_PIZZA, MIDDLE_PIZZA, BIG_PIZZA];
  function getClassName(index: number) {
    const isEnabled = Object.prototype.hasOwnProperty.call(
      pizza.price[type as keyof typeof pizza.price],
      pizzaSizes[index]
    );
    if (!isEnabled) {
      return 'form-radio-group-item-unavailable';
    }

    const isChecked = pizzaSizes[index] === Number(size);
    if (isChecked) {
      return 'form-radio-group-item-checked';
    }

    return 'form-radio-group-item';
  }

  return (
    <>
      {pizzaSizes.map((pizzaSize, index) => (
        <button
          type="button"
          className={getClassName(index)}
          disabled={getClassName(index) === 'form-radio-group-item-unavailable'}
          key={uuidv4()}
          onClick={() => onChange(pizzaSize)}
        >
          <input id={`radio-${index + 1}`} type="radio" name="radio" />
          <label htmlFor={`radio-${index + 1}`} className="unit-of-measurement">
            {pizzaSize} {UNIT_OF_MEASUREMENT}
          </label>
        </button>
      ))}
    </>
  );
}
