import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/HomePage/Home';
import Checkout from './pages/CheckoutPage/Checkout';
import PurchaseHistory from './pages/PurchaseHistory/PurchaseHistory';
import { CarContext } from './contexts/CarContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productId) => {
    const updateCart = {
      ...cartItems,
      [productId]: (cartItems[productId] ?? 0) + 1,
    };
    setCartItems(updateCart);
  };
  return (
    <CarContext.Provider value={{ isCartOpen, setIsCartOpen, setCartItems }}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/history' elemtn={<PurchaseHistory />} />
      </Routes>
    </CarContext.Provider>
  );
}

export default App;
