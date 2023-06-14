import shopper from '@assets/shopper.svg';
import emptyPage from '@assets/locale/ru.json';

import Button from '../button/Button';

import './EmptyTrash.scss';

export default function EmptyTrash() {
  const t = emptyPage.emptyPage;
  return (
    <main className="main-cart-wrapper">
      <div className="title">
        <h3>{t.emptyTrash}</h3>
      </div>
      <p className="sub-title">{t.emptyOrder}</p>
      <img alt="Shopper men" className="shopper" src={shopper} />
      <Button type="backwards" />
    </main>
  );
}
