import { useNavigate } from 'react-router-dom';

import plus from '@assets/plus.svg';
import plusOrange from '@assets/plusOrange.svg';
import arrowBack from '@assets/arrowBack.svg';

import { useAppDispatch } from '../../hook';
import { onFilterChange } from '../../store/pizzaSlice';
import { Args } from '../../ts/interfaces/interfaces';

import './Button.scss';

export default function Button(props: Args) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { type, name, isActive } = props;
  return (
    <>
      {type === 'filter' && (
        <button
          type="button"
          onClick={() => dispatch(onFilterChange(name))}
          className={isActive ? 'filter-active' : type}
        >
          {name}
        </button>
      )}

      {type === 'added' && (
        <button type="button" className={type}>
          <img alt="shopping cart" src={plus} />
          <p className="add-button-name">Добавить</p>
        </button>
      )}

      {type === 'add' && (
        <button type="button" className={type}>
          <img alt="shopping cart" src={plusOrange} />
          <p className="add-button-name">Добавить</p>
          <div className="notification-round-container">
            <span className="notification-container-text">2</span>
          </div>
        </button>
      )}

      {type === 'back' && (
        <button type="button" onClick={() => navigate('/')} className={type}>
          <img alt="back" src={arrowBack} />
          <p className="button-back-title">Вернуться назад</p>
        </button>
      )}

      {type === 'backwards' && (
        <button type="button" onClick={() => navigate('/')} className={type}>
          <p className="button-backwards-title">Вернуться назад</p>
        </button>
      )}
    </>
  );
}
