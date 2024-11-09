import { createContext } from 'react';

export const CarContext = createContext(null);

export const getAmountOfItemsInCart = (cartItemsObj) => {
  let amount = 0;
  for (const productId in cartItemsObj) {
    amount += cartItemsObj[productId];
  }
};
