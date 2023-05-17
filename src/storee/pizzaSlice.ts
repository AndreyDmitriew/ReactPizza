import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PizzasState, PizzaOrder } from '../ts/types/types';

const initialState: PizzasState = {
  order: [
    {
      pizza: {
        id: '0adf3b14-a7c1-4dfe-8375-fcc24tr06f91',
        image: 'https://imageup.ru/img220/4271686/image-2.jpg',
        name: 'Чизбургер-пицца',
        rating: 3.5,
        price: {
          thin: {
            26: 340,
            30: 359,
            40: 369,
          },
          traditional: {
            26: 360,
            30: 380,
            40: 396,
          },
        },
      },
      params: {
        price: 140,
        count: 2,
      },
    },
    {
      pizza: {
        id: '0adf3b14-a7c1-4dfe-8375-fcc654t675786',
        image: 'https://imageup.ru/img220/4271686/image-2.jpg',
        name: 'Сырная',
        rating: 4,
        price: {
          thin: {
            '26': 310,
          },
          traditional: {
            '26': 360,
            '40': 396,
          },
        },
      },
      params: {
        price: 140,
        count: 1,
      },
    },
  ],
};

const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    addPizza(state, action: PayloadAction<PizzaOrder>) {
      const pizza = action.payload;
      const orderedPizza = state.order.find(
        (o) => o.pizza.id === pizza.pizza.id
      );
      if (orderedPizza) {
        state.order.forEach((e) => {
          if (e.pizza.id === pizza.pizza.id) {
            e.params.count += 1;
          }
        });
      } else {
        // state.order.push({ ...pizza, params: { ...pizza.params, count: 1 } });
        state.order = [...state.order, pizza];
      }
    },
  },
});

export const { addPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
