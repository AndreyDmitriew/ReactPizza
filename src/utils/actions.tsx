import { trashAllPizza } from '@store/pizzaSlice';
import { AppDispatch } from '../store';

export const trashAllOrderedPizza = (dispatch: AppDispatch) =>
  dispatch(trashAllPizza());
