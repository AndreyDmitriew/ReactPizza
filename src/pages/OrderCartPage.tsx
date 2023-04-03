import React from "react";

import { Header } from '../components/header/Header';
import { SummaryCart } from '../components/summaryCart/SummaryCart';
import horisontalDivider from '../assets/locale/horizontalDivider.svg';

export const OrderCartPage = () => {
    return (
        <div>
            <Header />
            <img alt={'Divider'} style={{}} src={horisontalDivider}/>

            <SummaryCart />
        </div>
    );
};
