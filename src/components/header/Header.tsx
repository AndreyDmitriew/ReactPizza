import { ReactNode } from 'react';
import shoppingCart from '@assets/shoppingСart.svg';
import { CURRENCY } from '@constants/constants';
import icon from '@assets/pizzaLogo.svg';

import { mainHeader } from '@assets/locale/ru.json';
import { Props } from '@ts/interfaces/interfaces';
import { useAppSelector } from '@hook/hook';

import { SummaryButton } from '@components/button/Buttons';
import { getSummaryPizzasCount, getTotalPrice } from '../../utils/utils';

import './Header.scss';

const translate = mainHeader;
export default function Header({ navPanel }: Props) {
  const order = useAppSelector((state) => state.pizzas.order);
  const summaryPizzasCount: number = getSummaryPizzasCount(order);
  const buttonContent = (): ReactNode => {
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
          <SummaryButton
            summaryPizzasCount={summaryPizzasCount}
            buttonContent={buttonContent}
          />
        )}
      </article>

      <hr className="divider" />
    </header>
  );
}
Header.defaultProps = { navPanel: false };
