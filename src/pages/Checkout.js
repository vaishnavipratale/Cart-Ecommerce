import React, { useEffect, useState } from 'react';

const Checkout = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const confirmOrder = () => {
    alert("Order confirmed!");
    localStorage.removeItem('cart');
    window.location.href = '/';
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {cart.map(item => (
        <div key={item.id} className="checkout-item">
          <h2>{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
      <h2>Total: ${total}</h2>
      <div className="confirm">
        <button onClick={confirmOrder}>Confirm Order</button>
      </div>
    </div>
  );
}

export default Checkout;
