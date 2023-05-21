import {useNavigate} from 'react-router-dom';

import plus from '@assets/plus.svg';
import plusOrange from '@assets/plusOrange.svg';
import arrowBack from '@assets/arrowBack.svg';

import './Button.scss';
import {useAppDispatch} from '../../hook';
import {onFilterChange} from "../../store/pizzaSlice";

interface Args {
    price?: number;
    name?: string;
    type: string;
    isActive?: boolean;
    id?: string;
    handleChangeActiveButton?: any;
}

export default function Button(props: Args) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <>
            {props.type === 'filter' && (
                <button
                    onClick={() => dispatch(onFilterChange(props.name))}
                    className={props.isActive ? 'filter-active' : props.type}
                >
                    {props.name}
                </button>
            )}

            {props.type === 'added' && (
                <button className={props.type}>
                    <img alt="shopping cart" src={plus}/>
                    <p className="add-button-name">Добавить</p>
                </button>
            )}

            {props.type === 'add' && (
                <button className={props.type}>
                    <img alt="shopping cart" src={plusOrange}/>
                    <p className="add-button-name">Добавить</p>
                    <div className="notification-round-container">
                        <span className="notification-container-text">2</span>
                    </div>
                </button>
            )}

            {props.type === 'back' && (
                <button onClick={() => navigate('/')} className={props.type}>
                    <img alt="back" src={arrowBack}/>
                    <p className="button-back-title">Вернуться назад</p>
                </button>
            )}

            {props.type === 'pay' && (
                <button onClick={() => navigate('/')} className={props.type}>
                    <p className="button-pay-title">Оплатить сейчас</p>
                </button>
            )}

            {props.type === 'backwards' && (
                <button onClick={() => navigate('/')} className={props.type}>
                    <p className="button-backwards-title">Вернуться назад</p>
                </button>
            )}
        </>
    );
}
