import React from 'react';

import horisontalDivider from '../assets/locale/horizontalDivider.svg';

import { Header } from '../components/header/Header';
import { EmptyTrash } from '../components/emptyTrash/EmptyTrash';

export const Empty = () => {
  return (
    <div>
      <Header />
      <img alt={'Divider'} style={{}} src={horisontalDivider} />
      <EmptyTrash />
    </div>
  );
};
