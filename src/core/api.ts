import { getAllPizzasUrl } from '../core/config';

export const getAllPizzas = async () => {
  const response = await fetch(getAllPizzasUrl);
  return response.json();
};
