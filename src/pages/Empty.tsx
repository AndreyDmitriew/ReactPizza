import React from 'react';

import { Header } from '../components/header/Header';
import { EmptyTrash } from '../components/emptyTrash/EmptyTrash';
import horisontalDivider from '../assets/locale/horizontalDivider.svg';

export const Empty = () => {
  return (
    <div>
      <Header />
      <img alt={'Divider'} style={{}} src={horisontalDivider} />

      <EmptyTrash />
    </div>
  );
};
