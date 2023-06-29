import { PizzaOrder } from '@ts/types/types';

export interface PizzaState {
  order: PizzaOrder[];
}

export interface Props {
  navPanel?: boolean;
}
