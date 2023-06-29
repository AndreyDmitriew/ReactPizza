import { filterButtons } from '../../config/config';
import { Button } from '../button/Buttons';

export default function RenderButtons(filter: string) {
  return (
    <>
      {filterButtons.map((name) => (
        <Button
          key={name}
          name={name}
          styleButton={filter === name ? 'filter-active' : 'filter'}
          type="button"
          property="filter"
        />
      ))}
    </>
  );
}
