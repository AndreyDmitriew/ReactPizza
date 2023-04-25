import { create } from 'zustand';
import { getAllPizzas } from '../core/api';
import { StateType } from '../ts/types/types';
import { SMALL_PIZZA, MIDDLE_PIZZA } from '../constants/constants';
import { v4 as uuid } from 'uuid';

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
  navButtons: [
    { id: "42b16a63-64п0-4f12-a817-c9856456e1111", name: 'Все'},
    { id: "42b16a63-6620-4f12-a4е7-c98куе56e9883", name: 'Мясные' },
    { id: "42b16a63-6пк20-4f12-a817-c983446e9821", name: 'Вегетарианская'},
    { id: "42b16aке3-6620-4f12-a817-c934456e9843", name: 'Гриль'},
    { id: "42bв6aро3-6620-4f12-a817-c985к56e9883", name: 'Острые'},
    { id: "42b1ап63-6620-4f12-a817-c985645кe9883", name: 'Закрытые'},
  ],
  type: "42b16a63-64п0-4f12-a817-c9856456e1111",
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
  handleChangeActiveButton: (button) =>
    set((state) => ({
      type: button.id
    })),
  // updateState: (id: string, property: string, value: string) => set((state) => {
  //
  //   {...state, data: [...state.data]}
  //
  // }
}));
