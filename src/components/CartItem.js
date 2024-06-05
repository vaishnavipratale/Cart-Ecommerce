import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <h2>{item.name}</h2>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
}

export default CartItem;
