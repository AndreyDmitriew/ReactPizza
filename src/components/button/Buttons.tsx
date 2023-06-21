import { useNavigate } from 'react-router-dom';

import arrowBack from '@assets/arrowBack.svg';

import { onFilterChange } from '@store/pizzaSlice';
import FiltersEnum from '@ts/enums/enums';
import { useAppDispatch } from '@hook/hook';

import './Buttons.scss';

export interface Args {
  name?: string;
  isActive?: boolean;
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  id?: string;
}

export function FilterButton({ name, isActive }: Args) {
  const dispatch = useAppDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(onFilterChange(name as FiltersEnum))}
      className={isActive ? 'filter-active' : 'filter'}
    >
      {name}
    </button>
  );
}

FilterButton.defaultProps = {
  name: '',
  isActive: false,
};

export function BackButton() {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate('/')} className="back">
      <img alt="back" src={arrowBack} />
      <p className="button-back-title">Вернуться назад</p>
    </button>
  );
}

export function BackwardsButton() {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate('/')} className="backwards">
      <p className="button-backwards-title">Вернуться назад</p>
    </button>
  );
}
