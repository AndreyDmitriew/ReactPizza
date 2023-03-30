type sizes = 26 | 30 | 40;

export type PizzaType = {
  image: string;
  name: string;
  dough: string;
  size: sizes;
  price: number;
};

export type StateType = {
  data: object;
  isLoading: boolean;
  error: null;
  getPizzas: () => void;
};
