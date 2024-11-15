// src/components/Cart.js
import React, { useState } from 'react';
import '../styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
