import { useNavigate } from 'react-router-dom';

import { addPizza, onFilterChange, trashAllPizza } from '@store/pizzaSlice';
import FiltersEnum from '@ts/enums/enums';
import { useAppDispatch } from '@hook/hook';

import './Buttons.scss';
import { PizzaOrder, PizzaType } from '@ts/types/types';
import getButtonsData from '@components/button/ButtonsData';

export interface ButtonProps {
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

type ButtonData = {
  alt?: string;
  src?: string;
  title: JSX.Element;
};

type ButtonsData = {
  [key: string]: ButtonData;
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
}: ButtonProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const BUTTONS_DATA: ButtonsData = getButtonsData(name);

  function isButtonDataWithImage(
    data: ButtonData | { title: string }
  ): data is ButtonData {
    return 'alt' in data && 'src' in data;
  }

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

  const buttonData = (property && BUTTONS_DATA[property]) || { title: name };

  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      onClick={handleClick}
      className={styleButton}
    >
      {isButtonDataWithImage(buttonData) && (
        <img alt={buttonData.alt} src={buttonData.src} />
      )}
      {buttonData.title}
      {property === 'added' && (
        <div className="notification-round-container">
          <span className="notification-container-text">{count}</span>
        </div>
      )}
    </button>
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
