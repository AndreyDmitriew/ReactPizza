import { NavLink } from 'react-router-dom';
import { CURRENCY } from '@constants/constants';
import shoppingCart from '@assets/shoppingСart.svg';
import { PizzaOrder } from '@ts/types/types';
import { getTotalPrice } from '../../utils/utils';

export type SummaryButtonType = {
  summaryPizzasCount: number;
  order: PizzaOrder[];
};
export default function SummaryButton({
  summaryPizzasCount,
  order,
}: SummaryButtonType) {
  return (
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
  );
}
