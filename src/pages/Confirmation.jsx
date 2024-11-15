// src/pages/Confirmation.jsx
import React from 'react';

const Confirmation = ({ cartItems, user }) => {
  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Order for {user.username} has been confirmed!</p>
      <p>Shipping to: {user.address}, {user.city}, {user.pincode}</p>
      <p>Phone: {user.phoneNumber}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Qty: {item.quantity} - ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <button>Finish</button>
    </div>
  );
};

export default Confirmation;
