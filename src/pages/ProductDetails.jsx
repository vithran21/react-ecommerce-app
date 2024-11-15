// src/pages/ProductDetails.jsx
import React, { useState } from 'react';

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const cartItem = { ...product, quantity };
    // Add logic to store cartItem in cart state (e.g., context or Redux store)
    console.log('Product added to cart:', cartItem);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
