import React, { useEffect, useState, useRef } from 'react';
import { useQuery } from 'react-query';

import { sort } from '@assets/locale/ru.json';
import { PizzaType, PizzaName, PizzaOrder } from '@ts/types/types';
import { useAppSelector } from '@hook/hook';
import ContentItem from '../contentItem/ContentItem';
import RenderButtons from './RenderButtons';
import getAllPizzas from '../../core/api';
import vector from '../../assets/vector.svg';

import { filerPizzas, sortListItems } from '../../config/config';

import './Main.scss';

export default function Main() {
  const [pizzas, setPizzas] = useState<PizzaType[]>([]);
  const [isSortListOpen, setIsSortListOpen] = useState(false);
  const [sortItem, setSortItem] = useState(sortListItems[0]);
  const sortValue = useRef(null);
  const order: PizzaOrder[] = useAppSelector((state) => state.pizzas.order);
  const filter = useAppSelector((state) => state.pizzas.filter);
  const renderButtons = RenderButtons(filter);
  const { data: initialPizzasData } = useQuery<PizzaType[], Error>(
    'repoData',
    async () => {
      try {
        const pizzasData = await getAllPizzas();
        setPizzas(pizzasData);
        return pizzasData;
      } catch (e) {
        throw new Error(`Error! status: ${String(e)}`);
      }
    }
  );

  useEffect(() => {
    const available = filerPizzas[filter];
    const initialPizzas = initialPizzasData || [];
    if (filter === 'Все') {
      setPizzas(initialPizzas);
    } else {
      setPizzas(
        initialPizzas.filter(({ name }: PizzaName) => {
          return available?.includes(name);
        })
      );
    }
  }, [filter]);

  const onSort = (e: string) => {
    setIsSortListOpen(false);
    setSortItem(e);
    switch (e) {
      case 'по популярности':
        setPizzas(pizzas.sort((a, b) => (a.rating > b.rating ? 1 : -1)));
        break;
      case 'по цене':
        setPizzas(pizzas.sort((a, b) => (a.price < b.price ? 1 : -1)));
        break;
      case 'по алфавиту':
        setPizzas(pizzas.sort((a, b) => (a.name > b.name ? 1 : -1)));
        break;
      default:
        setPizzas(order.map((pizzaOrder) => pizzaOrder.pizza));
    }
  };

  return (
    <main>
      <article className="nav-panel">
        <div className="filter-buttons-container">{renderButtons}</div>
        <label htmlFor="sort" className="sort">
          <img alt="Vector" className="vector" src={vector} />
          <p className="sort-title">{sort.sortTitle}</p>
          <p
            role="presentation"
            className="sort-value"
            onClick={() => setIsSortListOpen(!isSortListOpen)}
          >
            {sortItem}
          </p>
          {isSortListOpen && (
            <div className="list-container">
              <ul className="sort-list" ref={sortValue}>
                {sortListItems.map((item) => (
                  <li
                    role="presentation"
                    onClick={() => onSort(item)}
                    key={item}
                    value={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </label>
      </article>
      <h3 className="main-title">Все пиццы</h3>
      {pizzas && (
        <section className="main-content">
          {pizzas.map((el: PizzaType) => (
            <ContentItem key={el.id} pizza={el} order={order} />
          ))}
        </section>
      )}
    </main>
  );
}
