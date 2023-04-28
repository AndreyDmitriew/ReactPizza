import React, { FC, useState } from 'react';

import icon from '../../assets/pizzaLogo.svg';

import Button from '../button/Button';
import { HeaderType } from '../../ts/types/types';
import { mainHeader } from '../../assets/locale/ru.json';

import './Header.scss';

export const Header: FC<HeaderType> = ({ navPanel }) => {
  const price: number = 520;
  const t = mainHeader;

  return (
    <header>
      <article className="header">
        <div className="header-title-container">
          <img alt="Main page pizza" src={icon} />
          <div>
            <h1 className="main-title">{t.mainTitle}</h1>
            <h3 className="sub-title">{t.mainSubTitle}</h3>
          </div>
        </div>
        {navPanel && (
          <div className="summary-button">
            <Button price={price} type={'summary'} />
          </div>
        )}
      </article>
      <hr className="divider" />
    </header>
  );
};
