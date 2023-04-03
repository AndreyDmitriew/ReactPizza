import React from "react";
import {Homepage} from '../pages/Homepage'
import {OrderCartPage} from '../pages/OrderCartPage'


export const main = {
    path: '/',
    element: <Homepage/>,
};

export const summary = {
    path: '/summary',
    element: <OrderCartPage/>,
}