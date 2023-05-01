import {
  BIG_PIZZA,
  MIDDLE_PIZZA,
  SMALL_PIZZA,
  UNIT_OF_MEASUREMENT,
} from '../../../constants/constants';
import {useOrderStore} from "../../../store/usePizzasStore";

export default function pizzaSize(pizza) {
  const pizzaSizes = [SMALL_PIZZA, MIDDLE_PIZZA, BIG_PIZZA];
  const order = useOrderStore((state: any) => state.order); //any

  return pizzaSizes.map((pizzaSize, index) => {
    const idIndex = `radio-${index + 1}`;
    const isOrdered = order.find((order: object)=> order.id === pizza.id )?.price
    const isItemCheck = Object.keys(Object.values(pizza.preorder)[0])[0] === pizzaSize
    // console.log(Object.keys(pizza.preorder)[0], 'Object.keys(pizza.preorder)[0][0]')
    // console.log(Object.keys(Object.values(pizza.preorder)[0])[0], 'Object.keys(pizza.preorder)[0][0]')
    const isNotOrderedAndFirst = !isOrdered && pizza.price?.hasOwnProperty(pizzaSizes) && Object.keys(Object.values(pizza.preorder)[0])[0] === pizzaSizes
    // console.log(Object.keys(pizza.price), 'Object.keys(Object.values(pizza.preorder)[0])[0]')
    // console.log(pizzaSize, 'pizzaSize')

    // for (let key in pizza.price) {
    //   console.log(Object.keys(pizza.price[key]).find((el)=>el==pizzaSize), 'key')
    // }

    const containerStyle = isItemCheck
        ? 'form-radio-group-item-checked'
        // : isNotOrderedAndFirst ? 'form-radio-group-item-checked'
        : !pizza.price.hasOwnProperty(pizzaSize)
        ? 'form-radio-group-item-unavailable'
        : 'form-radio-group-item';


    // const containerStyle = isItemCheck
    //     ? 'form-radio-group-item-checked'
    //     : isNotOrderedAndFirst ? 'form-radio-group-item-checked'
    //     : !pizza.price.hasOwnProperty(pizzaSizes)
    //     ? 'form-radio-group-item-unavailable'
    //     : 'form-radio-group-item';

    // console.log(containerStyle, 'containerStyle')

    // const isItemCheck = pizzaSize === size;
    // const isSizeAvailable = !!available.find((el) => +el === pizzaSize);
    // const containerStyle = isItemCheck
    //   ? 'form-radio-group-item-checked'
    //   : !isSizeAvailable
    //   ? 'form-radio-group-item-unavailable'
    //   : 'form-radio-group-item';

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
          // value={size}
          // disabled={!isSizeAvailable}
        />
        <label htmlFor={idIndex} className="unit-of-measurement">
          {pizzaSize} {UNIT_OF_MEASUREMENT}
        </label>
      </div>
    );
  });
}
