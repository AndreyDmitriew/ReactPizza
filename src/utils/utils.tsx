import { OrderType, PizzaOrder } from '../ts/types/types';

export const getSummaryPizzasCount = (order: Array<OrderType>) => {
  return order?.reduce((acc: number, curr: number) => {
    return acc + curr.params.count;
  }, 0);
};

export const getTotalPrice = (order: Array<OrderType>) => {
  return order?.reduce((acc: number, curr: number) => {
    return acc + curr.params.price * curr.params.count;
  }, 0);
};
