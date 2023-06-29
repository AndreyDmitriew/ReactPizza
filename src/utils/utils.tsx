import { PizzaOrder } from '@ts/types/types';

export const getSummaryPizzasCount = (order: PizzaOrder[]) => {
  return order.reduce((acc: number, curr: PizzaOrder) => {
    return acc + curr.params.count;
  }, 0);
};

export const getTotalPrice = (order: PizzaOrder[]) => {
  return order.reduce((acc: number, curr: PizzaOrder) => {
    return acc + curr.params.price * curr.params.count;
  }, 0);
};
