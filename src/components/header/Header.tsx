import shoppingCart from '@assets/shoppingСart.svg';
import { CURRENCY } from '@constants/constants';
import { NavLink } from 'react-router-dom';
import icon from '@assets/pizzaLogo.svg';

import { mainHeader } from '@assets/locale/ru.json';
import { Props } from '@ts/interfaces/interfaces';
import { useAppSelector } from '@hook/hook';

import { getSummaryPizzasCount, getTotalPrice } from '../../utils/utils';

import './Header.scss';

const translate = mainHeader;
export default function Header({ navPanel }: Props) {
  const order = useAppSelector((state) => state.pizzas.order);
  const summaryPizzasCount: number = getSummaryPizzasCount(order);
  const buttonContent = () => {
    return (
      <>
        {getTotalPrice(order)}
        {CURRENCY}
        <div className="vertical-divider" />
        <img alt="shopping cart" src={shoppingCart} className="cart" />
        {summaryPizzasCount}
      </>
    );
  };

  return (
    <header>
      <article className="header">
        <div className="header-title-container">
          <img alt="Main page pizza" src={icon} />
          <div>
            <h1 className="main-title">{translate.mainTitle}</h1>
            <h3 className="sub-title">{translate.mainSubTitle}</h3>
          </div>
        </div>

        {navPanel && (
          <div className="summary-button">
            <NavLink to={summaryPizzasCount ? '/summary' : '/empty'}>
              <button type="button" className="summary">
                {buttonContent()}
              </button>
            </NavLink>
          </div>
        )}
      </article>

      <hr className="divider" />
    </header>
  );
}
Header.defaultProps = { navPanel: false };
