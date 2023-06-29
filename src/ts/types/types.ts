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
    size: number;
    type: string;
  };
}

export interface OrderType {
  order: PizzaOrder[];
  addPizza: (pizza: PizzaOrder) => void;
}

export type InitialStateType = {
  filter: string;
  sort: string;
  isLoading: boolean;
  error: null;
  order: OrderType[];
};

export type PizzaName = {
  name: string;
};

export type SizesPizzaType = 26 | 30 | 40;
