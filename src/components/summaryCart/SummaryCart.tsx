import React from "react";

import {OrderType} from '../../ts/types/types';
import {usePizzasStore} from '../../store/usePizzasStore';
import {CURRENCY} from '../../constants/constants';

import {ContentItem} from '../../components/contentItem/ContentItem';

import shoppingCart from "../../assets/locale/shoppingСartGrey.svg";

import trash from "../../assets/locale/trash.svg";

import './SummaryCart.scss';
import horisontalDivider from "../../assets/locale/horizontalDivider.svg";

export const SummaryCart = () => {
    const order = usePizzasStore((state: any) => state.order); //any
    const isLoading = usePizzasStore((state: any) => state.isLoading); //any
    console.log(order, 'order')
    const userOrder = () => {
        return order?.map((el: OrderType) => {
            return (
                <div>
                    <img alt={'Divider'} className="item-divider" src={horisontalDivider}/>

                    <div className="item-container">
                        <div style={{
                            display: 'flex',
                            // justifyContent:' space-between',
                            alignItems: 'center',
                            gap: '18px',
                            // minWidth: '255px'
                        }}>
                            <img alt={'pizza'} className="item-image" src={el.image}/>
                            <div className="item-name-set">
                                <h6 className="item-name">{el.name}</h6>
                                <p className="item-parameters">{el.dough} тесто, {el.size} см. </p>
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            width: '300px',
                            justifyContent: 'space-between'
                        }}>
                            <div className="count">
                                <span className="circle minus"></span>
                                <p>{el.count}</p>
                                <span className="circle plus"></span>
                            </div>

                            <p>{el.price} {CURRENCY}</p>

                            <span className="circle-cross cross"></span>
                        </div>
                    </div>

                </div>
            );
        });
    };

    return (
        <main style={{
            // padding: '0 351px'
            width: '680px',
            margin: '0 auto',
        }}>
            <article className="cart-container">
                <div className="cart-name-container">
                    <div className="cart-container">
                        <img alt="shopping cart" src={shoppingCart} className="cart"/>
                    </div>

                    <h3>Корзина</h3>
                </div>

                <div className="trash-name-container">
                    <img alt="trash" src={trash}/>
                    <p className="trash-name">Очистить корзину</p>
                </div>
            </article>

            <div>
                {userOrder()}
            </div>
        </main>
    );
};
