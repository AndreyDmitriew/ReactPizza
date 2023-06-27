import { ReactNode } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import arrowBack from '@assets/arrowBack.svg';

import { addPizza, onFilterChange, trashAllPizza } from '@store/pizzaSlice';
import FiltersEnum from '@ts/enums/enums';
import { useAppDispatch } from '@hook/hook';

import './Buttons.scss';
import plus from '@assets/plus.svg';
import plusOrange from '@assets/plusOrange.svg';
import { PizzaOrder, PizzaType } from '@ts/types/types';

export interface ButtonType {
  name: string;
  styleButton?: string;
  type?: string;
  path?: string;
  action?: boolean;
  property?: string;
  count?: number;
  pizza?: PizzaType;
  price?: number;
  size?: number;
}

export type SummaryButtonType = {
  summaryPizzasCount: number;
  buttonContent: () => ReactNode;
};

export function Button({
  name,
  styleButton,
  type,
  path,
  action,
  property,
  count,
  pizza,
  price,
  size,
}: ButtonType) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (action) {
      dispatch(onFilterChange(name as FiltersEnum));
    }
    if (path) {
      navigate(path);
    }
    if (property === 'filter') {
      dispatch(onFilterChange(name as FiltersEnum));
    }
    if (property === 'pay') {
      dispatch(trashAllPizza());
      navigate('/');
    }
    if (property === 'add' || property === 'added') {
      dispatch(
        addPizza({
          pizza,
          params: {
            price,
            count: Number(count) + 1,
            type,
            size,
          },
        } as unknown as PizzaOrder)
      );
    }
  };

  const buttonName = () => {
    if (property === 'back') {
      return <p className="button-back-title">{name}</p>;
    }
    if (property === 'backwards') {
      return <p className="button-backwards-title">{name}</p>;
    }
    if (property === 'add' || property === 'added') {
      return <p className="add-button-name">{name}</p>;
    }
    return name;
  };

  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      onClick={handleClick}
      className={styleButton}
    >
      {property === 'back' && <img alt="back" src={arrowBack} />}
      {property === 'add' && <img alt="shopping cart" src={plus} />}
      {property === 'added' && <img alt="shopping cart" src={plusOrange} />}
      {buttonName()}
      {property === 'added' && (
        <div className="notification-round-container">
          <span className="notification-container-text">{count}</span>
        </div>
      )}
    </button>
  );
}

export function SummaryButton({
  summaryPizzasCount,
  buttonContent,
}: SummaryButtonType) {
  return (
    <div className="summary-button">
      <NavLink to={summaryPizzasCount ? '/summary' : '/empty'}>
        <button type="button" className="summary">
          {buttonContent()}
        </button>
      </NavLink>
    </div>
  );
}

Button.defaultProps = {
  styleButton: '',
  path: '',
  action: false,
  property: '',
  count: 0,
  pizza: 'defaultPizzaType',
  price: 0,
  size: 0,
  type: 'button',
};
