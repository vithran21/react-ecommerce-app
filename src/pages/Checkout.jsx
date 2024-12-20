// src/pages/Checkout.jsx
import React from 'react';

const Checkout = ({ cartItems, user }) => {
  return (
    <div>
      <h2>Checkout</h2>
      <p>Shipping to: {user.address}, {user.city}, {user.pincode}</p>
      <p>Phone: {user.phoneNumber}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Qty: {item.quantity} - ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <button>Confirm Order</button>
    </div>
  );
};

export default Checkout;
