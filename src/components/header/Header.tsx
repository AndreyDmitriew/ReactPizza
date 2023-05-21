import React, {FC} from 'react';

import shoppingCart from "@assets/shoppingСart.svg";
import icon from '../../assets/pizzaLogo.svg';

import {mainHeader} from '../../assets/locale/ru.json';
import {HeaderType} from '../../ts/types/types';
import {CURRENCY} from "@constants/constants";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hook";

import {getSummaryPizzasCount, getTotalPrice} from "../../utils/utils";

import './Header.scss';

export const Header: FC<HeaderType> = ({navPanel}) => {
    const t = mainHeader;
    const order = useAppSelector((state) => state.pizzas.order);
    const summaryPizzasCount = getSummaryPizzasCount(order)
    return (
        <header>
            <article className="header">
                <div className="header-title-container">
                    <img alt="Main page pizza" src={icon}/>
                    <div>
                        <h1 className="main-title">{t.mainTitle}</h1>
                        <h3 className="sub-title">{t.mainSubTitle}</h3>
                    </div>
                </div>
                {navPanel && (
                    <div className="summary-button">
                        <NavLink to={summaryPizzasCount ? "/summary" : "/empty"}>
                            <button className={'summary'}>
                                {getTotalPrice(order)}
                                {CURRENCY}
                                <div className="vertical-divider"/>
                                <img alt="shopping cart" src={shoppingCart} className="cart"/>
                                {summaryPizzasCount}
                            </button>
                        </NavLink>
                    </div>
                )}
            </article>
            <hr className="divider"/>
        </header>
    );
};
