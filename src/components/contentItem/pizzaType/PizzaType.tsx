import { THIN, TRADITIONAL } from '../../../constants/constants';

export default function PizzaType({ pizza, type, onChange }) {
  const pizzaTypes = [THIN, TRADITIONAL];

  const getClassName = (index) => {
    const pizzaType = pizzaTypes[index];
    const isEnabled = pizza.price[pizzaType];
    const isChecked = pizzaType === type;

    return !isEnabled
      ? 'form-radio-group-item-unavailable'
      : isChecked
      ? 'form-radio-group-item-checked'
      : 'form-radio-group-item';
  };

  return (
    <>
      {pizzaTypes.map((pizzaType, index) => (
        <div
          className={getClassName(index)}
          key={`${pizza.id + index}type`}
          onClick={() => onChange(pizzaType)}
        >
          <input
            id={`radio-${index + 1}`}
            type="radio"
            name="dough"
            value="1"
          />
          <label htmlFor={`radio-${index + 1}`}>{pizzaType}</label>
        </div>
      ))}
    </>
  );
}
