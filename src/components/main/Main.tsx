import React, { useEffect, useState, useRef } from 'react';
import { useQuery } from 'react-query';

import { sort } from '@assets/locale/ru.json';
import { ContentItem } from '../contentItem/ContentItem';
import { usePizzasStore } from '../../store/usePizzasStore';
import { useRenderButtons } from './useRenderButtons';
import { getAllPizzas } from '../../core/api';
import { useAppSelector } from '../../hook';
import vector from '../../assets/vector.svg';

import { filerPizzas, sortListItems } from '../../config/config';

import { PizzaType, PizzaName } from '../../ts/types/types';

import './Main.scss';

export default function Main() {
  const [pizzass, setPizzass] = useState([]);
  const [isSortListOpen, setIsSortListOpen] = useState(false);
  const [sortItem, setSortItem] = useState(sortListItems[0]);
  // const filter = usePizzasStore((state: any) => state.filter); //any

  const handleChangeActiveButton = usePizzasStore(
    (state: any) => state.handleChangeActiveButton
  ); // any

  const handleUpdatePizzas = usePizzasStore((state: any) => state.updatePizzas); // any
  const sortValue = useRef(null);

  const order = useAppSelector((state) => state.pizzas.order);
  const filter = useAppSelector((state) => state.pizzas.filter);

  useEffect(() => {
    console.log(order, 'order');
    console.log(filter, 'filter');
  }, [order, filter]);

  const {
    isLoading,
    error,
    data: pizzas,
  } = useQuery('repoData', async () => {
    try {
      return await getAllPizzas();
    } catch (e) {
      throw new Error(`Error! status: ${e}`);
    }
  });
  console.log(filter, order, 'filter');

  useEffect(() => {
    handleUpdatePizzas(pizzas);
    setPizzass(pizzas);
  }, [pizzas]);

  useEffect(() => {
    const available = filerPizzas[filter];
    if (filter === 'Все') {
      setPizzass(pizzas);
    } else {
      setPizzass(
        pizzas?.filter(({ name }: PizzaName) => {
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
        setPizzass(pizzass.sort((a, b) => (a.rating > b.rating ? 1 : -1)));
        break;
      case 'по цене':
        setPizzass(pizzass.sort((a, b) => (a.price < b.price ? 1 : -1)));
        break;
      case 'по алфавиту':
        setPizzass(pizzass.sort((a, b) => (a.name > b.name ? 1 : -1)));
        break;
      default:
        setPizzass(order);
    }
  };

  const t = sort;

  const renderButtons = useRenderButtons(filter, handleChangeActiveButton);

  return (
    <main>
      <article className="nav-panel">
        <div className="filter-buttons-container">{renderButtons}</div>
        <label style={{ position: 'relative' }} className="sort">
          <img alt="Vector" className="vector" src={vector} />
          <p className="sort-title">{t.sortTitle}</p>
          <p
            className="sort-value"
            onClick={() => setIsSortListOpen(!isSortListOpen)}
          >
            {sortItem}
          </p>
          {isSortListOpen && (
            <div className="list-container">
              <ul className="sort-list" ref={sortValue}>
                {sortListItems.map((el) => (
                  <li onClick={() => onSort(el)} key={el} value={el}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </label>
      </article>

      <h3 className="main-title">Все пиццы</h3>
      <section className="main-content">
        {pizzass?.map((el: PizzaType) => (
          <ContentItem key={el.id} pizza={el} />
        ))}
      </section>
    </main>
  );
}
