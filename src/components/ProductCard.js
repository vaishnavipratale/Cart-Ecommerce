import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    let cart = localStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <input type="number" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} min="1" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
