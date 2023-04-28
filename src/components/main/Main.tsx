import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import { ContentItem } from '../contentItem/ContentItem';
import { usePizzasStore } from '../../store/usePizzasStore';

import { PizzaType } from '../../ts/types/types';

import './Main.scss';
import vector from '../../assets/vector.svg';
import Button from '../button/Button';
import { filterButtons } from '../../config/config';
import { useRenderButtons } from './useRenderButtons';
import { sort } from '@assets/locale/ru.json';
import { getAllPizzas } from '../../core/api';
import { getAllPizzasUrl } from '../../core/config';

export const Main = () => {
  const getPizzas = usePizzasStore((state: any) => state.getPizzas); //any
  // const pizzas = usePizzasStore((state: any) => state.data); //any
  // const isLoading = usePizzasStore((state: any) => state.isLoading); //any

  const [isSortListOpen, setIsSortListOpen] = useState(false);
  const type = usePizzasStore((state: any) => state.type); //any
  const handleChangeActiveButton = usePizzasStore(
    (state: any) => state.handleChangeActiveButton
  ); //any

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

  const t = sort;

  const renderButtons = useRenderButtons(type, handleChangeActiveButton);

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
              {t.popular}
            </p>
            {isSortListOpen && (
              <div className="list-container">
                <ul className="sort-list">
                  <li>{t.popular}</li>
                  <li>{t.price}</li>
                  <li>{t.alphabet}</li>
                </ul>
              </div>
            )}
          </label>
        </article>
      }

      <h3 className="main-title">Все пиццы</h3>
      <section className="main-content">
        {pizzas?.map((el: PizzaType) => {
          return <ContentItem key={el.id} pizza={el} />;
        })}
      </section>
    </main>
  );
};
