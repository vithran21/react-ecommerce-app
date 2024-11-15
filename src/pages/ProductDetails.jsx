// src/pages/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetails.css';
import '../styles/GlobalPage.css';

const ProductDetails = () => {
  const { productId } = useParams();
  
  const product = { id: productId, name: `Product ${productId}`, description: 'Detailed description of the product', price: 50 };

  return (
    <div className="product-details page-container">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
