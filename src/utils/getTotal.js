// retorna o preço total de um item específico
export const getItemTotalPrice = (price, quantity) => {
  return price * quantity;
}

// retorna o preço total da compra
export const getTotalOrderPrice = (totalItemsPrices) => {
  let total = totalItemsPrices.reduce((total, totalItemPrice) => total + totalItemPrice, 0);
  return total;
}