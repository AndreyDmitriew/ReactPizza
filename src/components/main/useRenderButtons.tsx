import { filterButtons } from '../../config/config';
import Button from '../button/Button';

export const useRenderButtons = (filter: string) => {
  return filterButtons.map((name) => {
    const isActive = filter === name;
    return (
      <Button
        key={name}
        type={'filter'}
        name={name}
        isActive={isActive}
        id={name}
      />
    );
  });
};
