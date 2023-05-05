import { useEffect, useState, useRef } from 'react';
import { useQuery } from 'react-query';

import { ContentItem } from '../contentItem/ContentItem';
import { usePizzasStore } from '../../store/usePizzasStore';

import { PizzaType } from '../../ts/types/types';

import './Main.scss';
import vector from '../../assets/vector.svg';
import { filerPizzas, filterButtons, sortListItems } from '../../config/config';
import { useRenderButtons } from './useRenderButtons';
import { sort } from '@assets/locale/ru.json';
import { getAllPizzas } from '../../core/api';

export const Main = () => {
  const [pizzass, setPizzass] = useState([]);
  const [isSortListOpen, setIsSortListOpen] = useState(false);
  const [sortItem, setSortItem] = useState(sortListItems[0]);
  const filter = usePizzasStore((state: any) => state.filter); //any
  const handleChangeActiveButton = usePizzasStore(
    (state: any) => state.handleChangeActiveButton
  ); //any
  const handleUpdatePizzas = usePizzasStore((state: any) => state.updatePizzas); //any
  const sortValue = useRef(null);

  const {
    isLoading,
    error,
    data: pizzas,
  } = useQuery('repoData', async () => {
    try {
      return await getAllPizzas();
    } catch (error) {
      throw new Error(`Error! status: ${error}`);
    }
  });

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
        pizzas?.filter(({ name }) => {
          return available.includes(name);
        })
      );
    }
  }, [filter]);

  const onSort = (e) => {
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
    }
  };

  const t = sort;

  const renderButtons = useRenderButtons(filter, handleChangeActiveButton);

  return (
    <main>
      {
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
      }

      <h3 className="main-title">Все пиццы</h3>
      <section className="main-content">
        {pizzass?.map((el: PizzaType) => (
          <ContentItem key={el.id} pizza={el} />
        ))}
      </section>
    </main>
  );
};
