import { create } from 'zustand';
import { getAllPizzas } from '../core/api';
import { StateType } from '../ts/types/types';
import { SMALL_PIZZA, MIDDLE_PIZZA } from '../constants/constants';

const fakeOrder: any = [
  {
    id: '0ad45et14-a7c1-4dfe-8375-fcc27565af91',
    image: 'https://imageup.ru/img260/4271687/image-5.jpg',
    name: 'Сырный цыпленок',
    dough: 'тонкое',
    size: SMALL_PIZZA,
    price: 385,
    count: 2,
  },
  {
    id: '0ad45et14-a7c1-4dfe-8375-fc42346755af91',
    image: 'https://imageup.ru/img117/4271688/image-6.jpg',
    name: 'Сырный цыпленок',
    dough: 'тонкое',
    size: MIDDLE_PIZZA,
    price: 290,
    count: 1,
  },
  {
    id: '0ad45et14-a7c1-4dfe-8375-fc55654346af91',
    image: 'https://imageup.ru/img220/4271686/image-2.jpg',
    name: 'Чизбургер-пицца',
    dough: 'тонкое',
    size: MIDDLE_PIZZA,
    price: 350,
    count: 3,
  },
];

export const usePizzasStore = create<StateType>((set) => ({
  data: [],
  order: fakeOrder,
  sort: 'по популярности',
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
