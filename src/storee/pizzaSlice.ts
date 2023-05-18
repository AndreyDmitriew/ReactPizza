import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PizzasState, PizzaOrder, PizzaType } from '@ts/types/types';

const initialState: PizzasState = {
  order: [],
};


const pizzaSlice = createSlice({
  name: 'pizzas',
  filter: 'Все',
  sort: 'по популярности',
  isLoading: false,
  error: null,
  initialState,
  reducers: {
    handleChangeActiveButton(state, action: PayloadAction<PizzaOrder>) {},

    addPizza(state, action: PayloadAction<PizzaOrder>) {
      const pizza = action.payload;
      const orderedPizza = state.order.find(
        (o: PizzaType) => o.pizza.id === pizza.pizza.id
      );
      if (orderedPizza) {
        state.order.forEach((e: PizzaType) => {
          if (e.pizza.id === pizza.pizza.id) {
            e.params.count += 1;
          }
        });
      } else {
        state.order = [...state.order, pizza];
      }
    },

    deletePizza(state, action: PayloadAction<PizzaOrder>) {
      const pizza = action.payload;
      const orderedPizza = state.order.find(
        (o: PizzaType) => o.pizza.id === pizza.pizza.id
      );
      if (orderedPizza) {
        state.order.splice(
          state.order.findIndex((e: PizzaType) => e.pizza.id === pizza.pizza.id),
          1
        );
      }
    },

    decrementPizza(state, action: PayloadAction<PizzaOrder>) {
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
  },
});

export const { addPizza, deletePizza, decrementPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
