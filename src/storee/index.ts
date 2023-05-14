import {configureStore} from "@reduxjs/toolkit";
import pizzaReducer from './pizzaSlice';

const storee = configureStore({
    reducer: {
        pizzas: pizzaReducer,
    }
});

export default storee;

export type RootState = ReturnType<typeof storee.getState>
export type AppDispatch = typeof storee.dispatch;