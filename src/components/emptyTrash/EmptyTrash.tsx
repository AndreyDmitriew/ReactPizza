import shopper from '@assets/shopper.svg';
import emptyPage from '@assets/locale/ru.json';

import { Button } from '../button/Buttons';

import './EmptyTrash.scss';

const translate = emptyPage.emptyPage;
export default function EmptyTrash() {
  return (
    <main className="main-cart-wrapper">
      <div className="title">
        <h3>{translate.emptyTrash}</h3>
      </div>
      <p className="sub-title">{translate.emptyOrder}</p>
      <img alt="Shopper men" className="shopper" src={shopper} />
      <Button
        key="back"
        name="Вернуться назад"
        styleButton="backwards"
        type="button"
        property="backwards"
        path="/"
      />
    </main>
  );
}
