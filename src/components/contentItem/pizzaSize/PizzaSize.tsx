import {
  BIG_PIZZA,
  MIDDLE_PIZZA,
  SMALL_PIZZA,
  UNIT_OF_MEASUREMENT,
} from '../../../constants/constants';

export default function PizzaSize({ pizza, type, size, onChange }) {
  const pizzaSizes = [SMALL_PIZZA, MIDDLE_PIZZA, BIG_PIZZA];

  const getClassName = (index) => {
    const isEnabled = pizza.price[type]?.hasOwnProperty(pizzaSizes[index]);
    const isChecked = pizzaSizes[index] === Number(size);

    return !isEnabled
      ? 'form-radio-group-item-unavailable'
      : isChecked
      ? 'form-radio-group-item-checked'
      : 'form-radio-group-item';
  };

  return (
    <>
      {pizzaSizes.map((pizzaSize, index) => {
        return (
          <div
            className={getClassName(index)}
            key={`${pizza.id + index}type`}
            onClick={() => onChange(pizzaSize)}
          >
            <input
              id={`radio-${index + 1}`}
              type="radio"
              name="radio"
            />
            <label
              htmlFor={`radio-${index + 1}`}
              className="unit-of-measurement"
            >
              {pizzaSize} {UNIT_OF_MEASUREMENT}
            </label>
          </div>
        );
      })}
    </>
  );
}
