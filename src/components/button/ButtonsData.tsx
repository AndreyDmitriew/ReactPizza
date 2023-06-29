import arrowBack from '@assets/arrowBack.svg';
import plus from '@assets/plus.svg';
import plusOrange from '@assets/plusOrange.svg';

export default function getButtonsData(name: string) {
  return {
    back: {
      alt: 'back',
      src: arrowBack,
      title: <p className="button-back-title">{name}</p>,
    },
    backwards: {
      title: <p className="button-backwards-title">{name}</p>,
    },
    add: {
      alt: 'add',
      src: plus,
      title: <p className="add-button-name">{name}</p>,
    },
    added: {
      alt: 'added',
      src: plusOrange,
      title: <p className="add-button-name">{name}</p>,
    },
  };
}
