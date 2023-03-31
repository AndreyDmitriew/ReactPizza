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
  price: number;
};

export type StateType = {
  data: object;
  isLoading: boolean;
  error: null;
  getPizzas: () => void;
};
