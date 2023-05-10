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

export interface PizzaOrder extends PizzaType {
  params: {
    price: number;
    count: number;
  };
}

export type ChangeParameterType = {
  type: string;
  isTypeAvailable: boolean;
  pizzaType: string;
};

export interface OrderType {
  order: object[];
  // addPizza: object[];
  addPizza: any;
}

export type StateType = {
  data: object;
  order: OrderType[];
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
