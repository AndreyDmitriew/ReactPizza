import { create } from 'zustand';
import { getAllPizzas } from '../core/api';
import { StateType } from '../ts/types/types';

export const usePizzasStore = create<StateType>((set) => ({
  data: [],
  isLoading: false,
  error: null,
  getPizzas: async () => {
    try {
      set({ isLoading: true });
      const response = await getAllPizzas();
      set({ isLoading: false, data: response });
    } catch (error) {
      set({ error: error, isLoading: false });
      throw new Error(`Error! status: ${error}`);
    }
  },
  // updateState: (id: string, property: string, value: string) => set((state) => {
  //
  //   {...state, data: [...state.data]}
  //
  // }
}));
