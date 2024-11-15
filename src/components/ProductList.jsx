// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
