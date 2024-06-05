import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductListing = () => {
  const [products] = useState([
    { id: 1, name: "Product 1", price: 10, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 20, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 30, image: "https://via.placeholder.com/150" }
  ]);

  return (
    <div className="product-listing">
      <h1>Product Listing</h1>
      <div className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <a className="cart-link" href="/cart">Go to Cart</a>
    </div>
  );
}

export default ProductListing;
