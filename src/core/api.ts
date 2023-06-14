import { PizzaType } from '@ts/types/types';
import getAllPizzasUrl from './config';

export default async function getAllPizzas(): Promise<PizzaType[]> {
  try {
    const response = await fetch(getAllPizzasUrl);
    const allPizzas: Promise<PizzaType[]> = response.json();
    return allPizzas;
  } catch (error) {
    console.log(error);
    return [];
  }
}
