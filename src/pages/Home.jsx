// src/pages/Home.js
import React from 'react';
import ProductList from '../components/ProductList';
import '../styles/Home.css';
import '../styles/GlobalPage.css';

const Home = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 20 },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 30 },
  ];

  return (
    <div className="home page-container">
      <h1>Welcome to Our Store</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
