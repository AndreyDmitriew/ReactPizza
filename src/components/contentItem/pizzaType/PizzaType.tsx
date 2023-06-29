import { v4 as uuidv4 } from 'uuid';
import { PizzaType as PizzaTSType } from '@ts/types/types';
import { THIN, TRADITIONAL } from '@constants/constants';

const pizzaTypes = [THIN, TRADITIONAL];

type TypeOfPizza = {
  pizza: PizzaTSType;
  type: string;
  onChange(pizzaType: string): void;
};

export default function PizzaType({ pizza, type, onChange }: TypeOfPizza) {
  function getClassName(index: number) {
    const pizzaType = pizzaTypes[index];

    const isEnabled = pizza.price[pizzaType as keyof typeof pizza.price];
    if (!isEnabled) {
      return 'form-radio-group-item-unavailable';
    }

    const isChecked = pizzaType === type;
    if (isChecked) {
      return 'form-radio-group-item-checked';
    }

    return 'form-radio-group-item';
  }

  return (
    <>
      {pizzaTypes.map((pizzaType, index) => (
        <button
          type="button"
          className={getClassName(index)}
          key={uuidv4()}
          onClick={() => onChange(pizzaType)}
        >
          <input
            key={`radio-${index + 1}`}
            type="radio"
            name="dough"
            value="1"
          />
          <label htmlFor={`radio-${index + 1}`}>{pizzaType}</label>
        </button>
      ))}
    </>
  );
}
