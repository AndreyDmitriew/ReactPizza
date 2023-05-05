import { OrderType } from '../../ts/types/types';
import { useOrderStore, usePizzasStore } from '../../store/usePizzasStore';
import { CURRENCY } from '../../constants/constants';

import shoppingCart from '../../assets/shoppingСartGrey.svg';
import trash from '../../assets/trash.svg';

import Button from '../button/Button';

import './SummaryCart.scss';

export const SummaryCart = () => {
  const order = useOrderStore((state: any) => state.order); //any
  const isLoading = usePizzasStore((state: any) => state.isLoading); //any
  const userOrder = () => {
    return order?.map((el: OrderType) => {
      return (
        <div key={el.id}>
          <div className="item-container">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <img alt="pizza" className="item-image" src={el.image} />
              <div className="item-name-set">
                <h6 className="item-name">{el.name}</h6>
                <p className="item-parameters">
                  {el.orderPizzaType} тесто, {el.orderPizzaSize} см.{' '}
                </p>
              </div>
            </div>

            <div className="item-set-container">
              <div className="count">
                <span className="circle minus"></span>
                <p>{el.count}</p>
                <span className="circle plus"></span>
              </div>

              <p>
                {el.price} {CURRENCY}
              </p>

              <span className="circle-cross cross"></span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <main className="main-cart-wrapper">
      <article className="cart-container">
        <div className="cart-name-container">
          <div className="cart-image-container">
            <img alt="shopping cart" src={shoppingCart} className="cart" />
          </div>

          <h3>Корзина</h3>
        </div>

        <div className="trash-name-container">
          <img alt="trash" src={trash} />
          <p className="trash-name">Очистить корзину</p>
        </div>
      </article>

      {userOrder()}

      <div className="summary-text-container">
        <p style={{ fontWeight: '400', fontSize: '15px' }}>
          Всего пицц: <strong>3шт.</strong>{' '}
        </p>
        <p style={{ fontWeight: '400', fontSize: '15px' }}>
          Сумма заказа:{' '}
          <span style={{ fontWeight: '700', color: 'orange' }}>
            900 {CURRENCY}
          </span>
        </p>
      </div>

      <div className="button-container">
        <Button type={'back'} />
        <Button type={'pay'} />
      </div>
    </main>
  );
};
