import { filterButtons } from '../../config/config';
import { Button } from '../button/Buttons';

export default function RenderButtons(filter: string) {
  return (
    <>
      {filterButtons.map((name) => {
        const style = filter === name ? 'filter-active' : 'filter';
        return (
          <Button
            key={name}
            name={name}
            styleButton={style}
            type="button"
            property="filter"
          />
        );
      })}
    </>
  );
}
