import { filterButtons } from '../../config/config';
import Button from '../button/Button';

export const useRenderButtons = (type, handleChangeActiveButton) => {
  return filterButtons.map((name) => {
    const isActive = type === name;
    return (
      <Button
        key={name}
        type={'filter'}
        name={name}
        isActive={isActive}
        id={name}
        handleChangeActiveButton={handleChangeActiveButton}
      />
    );
  });
};
