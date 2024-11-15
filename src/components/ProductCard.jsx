// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <Link to={`/product/${product.id}`} className="product-link">View Details</Link>
  </div>
);

export default ProductCard;
