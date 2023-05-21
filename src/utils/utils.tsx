export const getSummaryPizzasCount = (order) => {
  return order?.reduce((acc, curr) => {
    return acc + curr.params.count;
  }, 0);
};

export const getTotalPrice = (order) => {
  return order?.reduce((acc, curr) => {
    return acc + curr.params.price * curr.params.count;
  }, 0);
};
