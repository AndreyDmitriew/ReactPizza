import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PizzaOrder, PizzaType } from '@ts/types/types';
import { InitialStateType, StateType } from '../ts/types/types';

const initialState: InitialStateType = {
  filter: 'Все',
  sort: 'по популярности',
  isLoading: false,
  error: null,
  order: [],
};

const pizzaSlice = createSlice<StateType>({
  name: 'pizzas',
  initialState,
  reducers: {
    onFilterChange(state: StateType, action: PayloadAction<PizzaOrder>) {
      state.filter = action.payload;
    },

    addPizza(state: StateType, action: PayloadAction<PizzaOrder>) {
      const pizza = action.payload;

      // const orderedPizza = state.order.find(
      //     (o: PizzaType) => o.pizza.id === pizza.pizza.id
      // );

      const isParamsDifferent = state.order.find((o: PizzaType) => {
        return (
          o.pizza.id === pizza.pizza.id &&
          o.params.type === pizza.params.type &&
          o.params.size === pizza.params.size
        );
      });

      if (isParamsDifferent) {
        console.log('1');
        state.order.forEach((e: PizzaType) => {
          if (e.pizza.id === pizza.pizza.id) {
            e.params.count += 1;
          }
        });
      } else {
        console.log('2');
        pizza.params.count = 1;
        state.order = [...state.order, pizza];
      }
    },

    deletePizza(state: StateType, action: PayloadAction<PizzaOrder>) {
      const pizza = action.payload;
      const orderedPizza = state.order.find(
        (o: PizzaType) => o.pizza.id === pizza.pizza.id
      );
      if (orderedPizza) {
        state.order.splice(
          state.order.findIndex(
            (e: PizzaType) => e.pizza.id === pizza.pizza.id
          ),
          1
        );
      }
    },

    decrementPizza(state: StateType, action: PayloadAction<PizzaOrder>) {
      const pizza = action.payload;
      const orderedPizza = state.order.find(
        (o: PizzaType) => o.pizza.id === pizza.pizza.id
      );
      if (orderedPizza) {
        state.order.forEach((e: PizzaType) => {
          if (e.pizza.id === pizza.pizza.id && e.params.count > 1) {
            e.params.count -= 1;
          }
        });
      }
    },
    trashAllPizza(state: StateType) {
      state.order = [];
    },
  },
});

export const {
  onFilterChange,
  addPizza,
  deletePizza,
  decrementPizza,
  trashAllPizza,
} = pizzaSlice.actions;

export default pizzaSlice.reducer;
