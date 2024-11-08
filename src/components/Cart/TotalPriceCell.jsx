import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { catalogIndexedById } from '../../utils/catalog';

function calculateTotalPrice(cartObject) {
  let price = 0;
  for (const cartItem in cartObject) {
    price += catalogIndexedById[cartItem].price * cartObject[cartItem];
  }
  return price;
}

const TotalPriceCell = () => {
  const { cartItems } = useContext(CartContext);
  const totalPrice = calculateTotalPrice(cartItems);
  return (
    <section className='flex bg-slate-100 p-1 text-green-700 rounded-md justify-evenly'>
      <p>Total:</p>
      <p>{`$${totalPrice}`}</p>
    </section>
  );
};

export default TotalPriceCell;
