import {
  SMALL_PIZZA,
  MIDDLE_PIZZA,
  BIG_PIZZA,
} from '../../constants/constants';

const pizzaSizes = [SMALL_PIZZA, MIDDLE_PIZZA, BIG_PIZZA] as const;
type PizzaSizes = (typeof pizzaSizes)[number];

export type PizzaType = {
  id: string;
  image: string;
  name: string;
  rating: number;
  price: {
    thin?: {
      26?: number;
      30?: number;
      40?: number;
    };
    traditional?: {
      26?: number;
      30?: number;
      40?: number;
    };
  };
};

export interface PizzaOrder {
  pizza: PizzaType;
  params: {
    price: number;
    count: number;
  };
}

export interface PizzasState {
  order: PizzaOrder[];
}

export type ChangeParameterType = {
  type: string;
  isTypeAvailable: boolean;
  pizzaType: string;
};

export interface OrderType {
  order: PizzaOrder[];
  addPizza: (pizza: PizzaOrder) => void;
}

export type StateType = {
  // name?: string;
  // filter?: string;
  // sort: string;
  // isLoading: boolean;
  // error: null;
  order: OrderType[];
};

export type StateTypeee = {
  order?: OrderType[];
};

// export type OrderType = {
//   order: [];
// };

export type HeaderType = {
  navPanel?: boolean;
};

export type PizzaName = {
  name: string;
};
