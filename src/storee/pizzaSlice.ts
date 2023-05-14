import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {PizzasState, PizzaOrder} from '../ts/types/types'


const initialState: PizzasState = {
    order: [{
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
    },],
}

const pizzaSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<PizzaOrder>) {
            const pizza = action.payload
            const orderedPizza = state.order.find(
                (o) => o.pizza.id === pizza.id
            );
            if (orderedPizza) {
                orderedPizza.params.count += 1;
                return orderedPizza;
            }
            return { pizza };
        },
    },
});

export const { addTodo } = pizzaSlice.actions;

export default pizzaSlice.reducer;
