import React from 'react';
import { usePizzasStore } from '../../store/usePizzasStore';

import sadSmile from '../../assets/locale/sadSmile.svg';
import shopper from '../../assets/locale/shopper.svg';

import './EmptyTrash.scss';
import { Button } from '../button/Button';

export const EmptyTrash = () => {
  const order = usePizzasStore((state: any) => state.order); //any
  const isLoading = usePizzasStore((state: any) => state.isLoading); //any

  return (
    <main className="main-cart-wrapper">
      <div className="title">
        <h3>Корзина пустая</h3>
        <img alt={'Divider'} src={sadSmile} />
      </div>
      <p className={'sub-title'}>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br /> Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img alt={'Shopper men'} className="shopper" src={shopper} />
      <Button type={'backBlack'} />
    </main>
  );
};
