import { getAllPizzasUrl } from '../core/config';

export const getAllPizzas = async () => {
  try {
    const response = await fetch(getAllPizzasUrl);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
