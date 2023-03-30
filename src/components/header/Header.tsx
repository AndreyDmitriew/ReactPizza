import React from 'react';
import { v4 as uuid } from 'uuid';
import icon from '../../assets/locale/pizzaLogo.svg';
import horisontalDivider from '../../assets/locale/horizontalDivider.svg';
import vector from '../../assets/locale/vector.svg';

import './Header.scss';
import { Button } from '../button/Button';

export const Header = () => {
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
        <div className="summary-button">
          <Button price={price} type={'summary'} />
        </div>
      </article>
      <img alt={'Divider'} className="divider" src={horisontalDivider} />
      <article className="nav-panel">
        <div>{renderButtons()}</div>
        <label className="sort">
          <img alt={'Vector'} className="vector" src={vector} />
          <p className="sort-title">Сортировка по:</p>
          <select className="sort-list" onChange={() => console.log('onCh')}>
            <option value="grapefruit">популярности</option>
            <option value="lime">по цене</option>
            <option value="coconut">по алфавиту</option>
          </select>
        </label>
      </article>
    </header>
  );
};
