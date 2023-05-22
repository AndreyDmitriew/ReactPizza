import { filterButtons } from '../../config/config';
import Button from '../button/Button';

export default function useRenderButtons(filter: string) {
  return filterButtons.map((name) => {
    const isActive: boolean = filter === name;
    return (
      <Button
        key={name}
        type="filter"
        name={name}
        isActive={isActive}
        id={name}
      />
    );
  });
}
