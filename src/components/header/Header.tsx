import React, {FC, useState} from 'react';

import icon from '../../assets/locale/pizzaLogo.svg';
import vector from '../../assets/locale/vector.svg';

import Button from '../button/Button';
import { HeaderType } from '../../ts/types/types';
import { usePizzasStore } from '../../store/usePizzasStore';
import { ButtonInterface } from '../../ts/interfaces/interfaces';

import './Header.scss';

export const Header: FC<HeaderType> = ({navPanel}) => {
    const price: number = 520;
    const [isSortListOpen, setIsSortListOpen] = useState(false);
    const navButtons = usePizzasStore((state: any) => state.navButtons); //any
    const type = usePizzasStore((state: any) => state.type); //any
    const handleChangeActiveButton = usePizzasStore((state: any) => state.handleChangeActiveButton); //any
    console.log(type, 't')

    const renderButtons = () => {
        return navButtons.map((button: ButtonInterface) => {
            const isActive = type === button.id
            return <Button key={button.id} type={'filter'} name={button.name} isActive={isActive} id={button.id}
                           handleChangeActiveButton={handleChangeActiveButton}/>
        });
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
      <hr className="divider" />
      {navPanel && (
        <article className="nav-panel">
          <div>{renderButtons()}</div>
          <label style={{ position: 'relative' }} className="sort">
            <img alt={'Vector'} className="vector" src={vector} />
            <p className="sort-title">Сортировка по:</p>
            <p
              className="sort-value"
              onClick={() => setIsSortListOpen(!isSortListOpen)}
            >
              по популярности
            </p>
            {isSortListOpen && (
              <div className="list-container">
                <ul className="sort-list">
                  <li>по пулярности</li>
                  <li>по цене</li>
                  <li>по алфавиту</li>
                </ul>
              </div>
            )}
          </label>
        </article>
      )}
    </header>
  );
};
