import {
  SMALL_PIZZA,
  MIDDLE_PIZZA,
  BIG_PIZZA,
} from '../../constants/constants';

const pizzaSizes = [SMALL_PIZZA, MIDDLE_PIZZA, BIG_PIZZA] as const;
type PizzaSizes = (typeof pizzaSizes)[number];

export type PizzaType = {
  key: string;
  image: string;
  name: string;
  dough: string;
  size: PizzaSizes;
  available: string[];
  price: number;
};

export type ChangeParameterType = {
  type: string;
  isTypeAvailable: boolean;
  pizzaType: string;
};

export interface OrderType extends PizzaType {
  count: number;
}

export type StateType = {
  data: object;
  pizzas: OrderType[];
  isLoading: boolean;
  error: null;
  // getPizzas: () => void;
  // getPizzas: any;
};

// export type OrderType = {
//   order: [];
// };

export type HeaderType = {
  navPanel?: boolean;
};
