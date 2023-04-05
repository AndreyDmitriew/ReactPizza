import React from 'react';

import { Homepage } from '../pages/Homepage';
import { OrderCartPage } from '../pages/OrderCartPage';
import { Empty } from '../pages/Empty';

import { ROUTES } from '../constants/routes.constants';

const { MAIN, SUMMARY, EMPTY } = ROUTES;

export const main = {
  path: MAIN,
  element: <Homepage />,
};

export const summary = {
  path: SUMMARY,
  element: <OrderCartPage />,
};
export const empty = {
  path: EMPTY,
  element: <Empty />,
};
