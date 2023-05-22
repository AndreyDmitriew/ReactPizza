import getAllPizzasUrl from './config';

export default async function getAllPizzas() {
  try {
    const response = await fetch(getAllPizzasUrl);
    return response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
}
