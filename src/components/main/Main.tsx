import { ContentItem } from '../contentItem/ContentItem';
import './Main.scss';
import { PizzaType } from '../../ts/types/types';
import { usePizzasStore } from '../../store/usePizzasStore';
import { useEffect } from 'react';

export const Main = () => {
  const getPizzas = usePizzasStore((state: any) => state.getPizzas); //any
  const pizzas = usePizzasStore((state: any) => state.data); //any
  const isLoading = usePizzasStore((state: any) => state.isLoading); //any

  useEffect(() => {
    getPizzas();
  }, []);

  const pizza = () => {
    return pizzas?.map((el: PizzaType) => {
      return (
        <ContentItem
          key={el.id}
          image={el.image}
          name={el.name}
          dough={el.dough}
          size={el.size}
          price={el.price}
        />
      );
    });
  };

  return (
    <main>
      <h3>Все пиццы</h3>
      <section className="main-content">{pizza()}</section>
    </main>
  );
};
