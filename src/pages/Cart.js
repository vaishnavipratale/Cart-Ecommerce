import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleBackToProducts = () => {
    navigate('/');
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <h2>Total: ${total}</h2>
      <div className="links">
        <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
        <button className="back-button" onClick={handleBackToProducts}>Back to Products</button>
      </div>
    </div>
  );
}

export default Cart;
