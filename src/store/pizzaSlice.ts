import { PizzaOrder, InitialStateType, OrderType } from '@ts/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import FiltersEnum from '@ts/enums/enums';
import { PizzaState } from '@ts/interfaces/interfaces';
import { WritableDraft } from 'immer/dist/internal';

const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState: {
    filter: 'Все',
    sort: 'по популярности',
    isLoading: false,
    error: null,
    order: [] as PizzaOrder[],
  } as InitialStateType & PizzaState,
  reducers: {
    onFilterChange(state, action: PayloadAction<FiltersEnum>) {
      state.filter = action.payload;
    },

    addPizza(state, { payload }: PayloadAction<PizzaOrder>) {
      const pizza: PizzaOrder = payload;

      const isParamsDifferent = state.order.find(
        (o: PizzaOrder) =>
          o.pizza.id === pizza.pizza.id &&
          o.params.type === pizza.params.type &&
          o.params.size === pizza.params.size
      );

      if (isParamsDifferent) {
        state.order.forEach((e: PizzaOrder) => {
          if (e.pizza.id === pizza.pizza.id) {
            e.params.count += 1;
          }
        });
      } else {
        pizza.params.count = 1;
        state.order = [...state.order, pizza] as WritableDraft<OrderType[]> &
          WritableDraft<PizzaOrder[]>;
      }
    },

    deletePizza(state, action: PayloadAction<PizzaOrder>) {
      const pizza = action.payload;
      const orderedPizza = state.order.find(
        (o: PizzaOrder) => o.pizza.id === pizza.pizza.id
      );
      if (orderedPizza) {
        const index = state.order.findIndex(
          (e: PizzaOrder) => e.pizza.id === pizza.pizza.id
        );

        state.order.splice(index, 1);
      }
    },

    decrementPizza(state, { payload }: PayloadAction<PizzaOrder>) {
      const orderedPizza = state.order.find(
        (o: PizzaOrder) => o.pizza.id === payload.pizza.id
      );
      if (orderedPizza) {
        state.order.forEach((e: PizzaOrder) => {
          if (e.pizza.id === payload.pizza.id && e.params.count > 1) {
            e.params.count -= 1;
          }
        });
      }
    },

    trashAllPizza(state) {
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
