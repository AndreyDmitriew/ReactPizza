import { filterButtons } from '../../config/config';
import { FilterButton } from '../button/Buttons';

export default function RenderButtons(filter: string) {
  return (
    <>
      {filterButtons.map((name) => (
        <FilterButton
          key={name}
          name={name}
          isActive={filter === name}
          id={name}
        />
      ))}
    </>
  );
}
