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
    size: string;
    type: string;
  };
}

export type AllPizzas = {
  pizzas: [];
};

export interface OrderType {
  order: PizzaOrder[];
  addPizza: (pizza: PizzaOrder) => void;
}

export type InitialStateType = {
  filter?: string;
  sort: string;
  isLoading: boolean;
  error: null;
  order: OrderType[];
};

export type StateType = {
  filter: string;
  sort: string;
  isLoading: boolean;
  error: null;
  order: OrderType[];
  name?: string;
  initialState?: InitialStateType;
  reducers: object;
};

export type PizzaName = {
  name: string;
};

export type ContentItemType = {
  pizza: PizzaType;
  order: PizzaOrder[];
};

export type TypeOfPizza = {
  pizza: PizzaType;
  type: string;
  onChange: (pizzaType: string) => void;
};

export type PizzaSizeType = {
  pizza: PizzaType;
  type: string;
  size: number;
  onChange: (pizzaSize: number) => void;
};
