import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';
import icon from '../../assets/locale/pizzaLogo.svg';
import horisontalDivider from '../../assets/locale/horizontalDivider.svg';
import vector from '../../assets/locale/vector.svg';

import './Header.scss';
import { Button } from '../button/Button';
import { HeaderType } from '../../ts/types/types';

export const Header: FC<HeaderType> = ({ navPanel }) => {
  const price: number = 520;

  interface Buttons {
    id: string;
    name: string;
  }

  const navButtons: Buttons[] = [
    { id: uuid(), name: 'Все' },
    { id: uuid(), name: 'Мясные' },
    { id: uuid(), name: 'Вегетарианская' },
    { id: uuid(), name: 'Гриль' },
    { id: uuid(), name: 'Острые' },
    { id: uuid(), name: 'Закрытые' },
  ];

  const renderButtons = () => {
    return navButtons.map((button) => (
      <Button key={button.id} type={'filter'} name={button.name} />
    ));
  };

  return (
    <header>
      <article className="header">
        <div className="header-title-container">
          <img alt="Main page pizza" src={icon} />
          <div>
            <h1 className="main-title">REACT PIZZA</h1>
            <h3 className="sub-title">самая вкусная пицца во вселенной</h3>
          </div>
        </div>
        {navPanel && (
          <div className="summary-button">
            <Button price={price} type={'summary'} />
          </div>
        )}
      </article>
      <img alt={'Divider'} className="divider" src={horisontalDivider} />
      {navPanel && (
        <article className="nav-panel">
          <div>{renderButtons()}</div>
          <label style={{ position: 'relative' }} className="sort">
            <img alt={'Vector'} className="vector" src={vector} />
            <p className="sort-title">Сортировка по:</p>
            <select
              className="sort-list"
              style={{ position: 'absolute' }}
              onChange={() => console.log('onCh')}
            >
              <option style={{ top: '10px' }} value="grapefruit">
                популярности
              </option>
              <option value="lime">по цене</option>
              <option value="coconut">по алфавиту</option>
            </select>
          </label>
        </article>
      )}
    </header>
  );
};
