import shoppingCart from '@assets/shoppingСart.svg';
import { CURRENCY } from '@constants/constants';
import { NavLink } from 'react-router-dom';
import icon from '../../assets/pizzaLogo.svg';

import { mainHeader } from '../../assets/locale/ru.json';
import { useAppSelector } from '../../hook';

import { getSummaryPizzasCount, getTotalPrice } from '../../utils/utils';

import './Header.scss';

export default function Header({ navPanel }: boolean) {
  const t = mainHeader;
  const order = useAppSelector((state) => state.pizzas.order);
  const summaryPizzasCount: number = getSummaryPizzasCount(order);
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
            <NavLink to={summaryPizzasCount ? '/summary' : '/empty'}>
              <button type="button" className="summary">
                {getTotalPrice(order)}
                {CURRENCY}
                <div className="vertical-divider" />
                <img alt="shopping cart" src={shoppingCart} className="cart" />
                {summaryPizzasCount}
              </button>
            </NavLink>
          </div>
        )}
      </article>
      <hr className="divider" />
    </header>
  );
}
