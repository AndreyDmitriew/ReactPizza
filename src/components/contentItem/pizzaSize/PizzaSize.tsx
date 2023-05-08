import {
  BIG_PIZZA,
  MIDDLE_PIZZA,
  SMALL_PIZZA,
  UNIT_OF_MEASUREMENT,
} from '../../../constants/constants';
import { useOrderStore } from '../../../store/usePizzasStore';

export default function PizzaSize({ pizza, type, size, onChange }) {
  const pizzaSizes = [SMALL_PIZZA, MIDDLE_PIZZA, BIG_PIZZA];

  const getClassName = (index) => {
    const pizzaSize = pizzaSizes[index];
    const isEnabled = pizza.price[pizzaSize];
    const isChecked = pizzaSize === size;

    // console.log(pizzaSize, 'pizzaSize');
    // console.log(isEnabled, 'isEnabled');
    // console.log(isChecked, 'isChecked');
    console.log(index, 'index');
    console.log(pizza.price[type], 'pizza.price');

    return !isEnabled
      ? 'form-radio-group-item-unavailable'
      : isChecked
      ? 'form-radio-group-item-checked'
      : 'form-radio-group-item';
  };

  // const order = useOrderStore((state: any) => state.order); //any
  // const idIndex = `radio-${index + 1}`;
  // const isOrdered = order.find(
  //   (order: object) => order.id === pizza.id
  // )?.price;
  // const isItemCheck =
  //   Object.keys(Object.values(pizza.preorder)[0])[0] === pizzaSize;
  // // console.log(Object.keys(pizza.preorder)[0], 'Object.keys(pizza.preorder)[0][0]')
  // // console.log(Object.keys(Object.values(pizza.preorder)[0])[0], 'Object.keys(pizza.preorder)[0][0]')
  // const isNotOrderedAndFirst =
  //   !isOrdered &&
  //   pizza.price?.hasOwnProperty(pizzaSizes) &&
  //   Object.keys(Object.values(pizza.preorder)[0])[0] === pizzaSizes;
  //
  // const changeSize = (value) => {
  //   setOrderPizzaSize(value);
  // };

  // const containerStyle = isItemCheck
  //   ? 'form-radio-group-item-checked'
  //   : // : isNotOrderedAndFirst ? 'form-radio-group-item-checked'
  //   !pizza.price.hasOwnProperty(pizzaSize)
  //   ? 'form-radio-group-item-unavailable'
  //   : 'form-radio-group-item';

  return (
    <>
      {pizzaSizes.map((pizzaSize, index) => {
        // console.log(getClassName(index), '!');
        return (
          <div
            className={getClassName(index)}
            key={`${pizza.id + index}type`}
            // onClick={() => changeSize(pizzaSize)}
          >
            <input
              id={`radio-${index + 1}`}
              type="radio"
              name="radio"
              // value={size}
              // disabled={!isSizeAvailable}
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
