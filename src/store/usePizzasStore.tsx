import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import { getAllPizzas } from '../core/api';
import { OrderType, StateType, PizzaOrder } from '../ts/types/types';
import { SMALL_PIZZA, MIDDLE_PIZZA } from '../constants/constants';
import { getAllPizza } from '../queries/queries';

// const fakeOrder: any = [
//   {
//     id: '0ad45et14-a7c1-4dfe-8375-fcc27565af91',
//     image: 'https://imageup.ru/img260/4271687/image-5.jpg',
//     name: 'Сырный цыпленок',
//     dough: 'тонкое',
//     size: SMALL_PIZZA,
//     price: 385,
//     count: 2,
//   },
//   {
//     id: '0ad45et14-a7c1-4dfe-8375-fc42346755af91',
//     image: 'https://imageup.ru/img117/4271688/image-6.jpg',
//     name: 'Сырный цыпленок',
//     dough: 'тонкое',
//     size: MIDDLE_PIZZA,
//     price: 290,
//     count: 1,
//   },
//   {
//     id: '0ad45et14-a7c1-4dfe-8375-fc55654346af91',
//     image: 'https://imageup.ru/img220/4271686/image-2.jpg',
//     name: 'Чизбургер-пицца',
//     dough: 'тонкое',
//     size: MIDDLE_PIZZA,
//     price: 350,
//     count: 3,
//   },
//
//   {
//     id: '0adf3b14-a7c1-4dfe-8375-fcc29306f91',
//     image: 'https://imageup.ru/img220/4271686/image-2.jpg',
//     name: 'Чизбургер-пицца',
//     price: {
//       traditional: {
//         '30': 380,
//       },
//     },
//   },
// ];

export const usePizzasStore = create<StateType>((set) => ({
  data: [],
  pizzas: [],
  filter: 'Все',
  sort: 'по популярности',
  isLoading: false,
  error: null,

  handleChangeActiveButton: (name) =>
    set((state) => ({
      filter: name,
    })),
  updatePizzas: (pizzasState) =>
    set((state) => ({
      pizzas: pizzasState,
    })),
  handleUpdateType: (updatedPizzas) =>
    set((state) => ({
      pizzas: updatedPizzas,
    })),
}));

export const useOrderStore = create<OrderType>((set) => ({
  order: [],
  addPizza: (pizza: PizzaOrder): void => {
    set((state) => ({
     isAlreadyOrdered = !!state[order].pizza.find(({ id }) => id === pizza.id)
      if(isAlreadyOrdered) {

      }
    }));
  },
}));

// return (
//     order: [
//       ...state.order,
//       state.order.map((el) => {
//       if (el.id === state.pizza.id) {
//          return {...el, count: state.pizza.count + 1};
//        }
//       return false;
//       }),],)
//     }
// else {
//   order: [...state.order, pizza],
// }



// incrementPizzaCount: (id) =>
//   set((state) => ({
//     order: [
//       ...state.order,
//       state.order.map((el) => {
//         if (el.id === id) {
//           return { ...el, count: state.count + 1 };
//         }
//         return false;
//       }),
//     ],
//   })),
