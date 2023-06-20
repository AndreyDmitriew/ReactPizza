import shopper from '@assets/shopper.svg';
import emptyPage from '@assets/locale/ru.json';

import { BackwardsButton } from '../button/Buttons';

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
      <BackwardsButton />
    </main>
  );
}
