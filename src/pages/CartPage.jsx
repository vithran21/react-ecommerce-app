// src/pages/CartPage.js
import React from 'react';
import Cart from '../components/Cart';
import '../styles/CartPage.css';
import '../styles/GlobalPage.css';

const CartPage = () => (
  <div className="cart-page page-container">
    <h1>Your Cart</h1>
    <Cart />
  </div>
);

export default CartPage;
