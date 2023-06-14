import { PizzaOrder } from '@ts/types/types';

export interface Args {
  price?: number;
  name?: string;
  type: string;
  isActive?: boolean;
  id?: string;
  handleChangeActiveButton?: () => void;
}

export interface PizzaState {
  order: PizzaOrder[];
}
