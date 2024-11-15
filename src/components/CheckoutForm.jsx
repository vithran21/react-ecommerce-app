// src/components/CheckoutForm.js
import React, { useState } from 'react';
import '../styles/CheckoutForm.css';

const CheckoutForm = () => {
  const [form, setForm] = useState({ name: '', address: '', cardNumber: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout process here
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Checkout</h2>
      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        placeholder="Address"
        required
      />
      <input
        type="text"
        value={form.cardNumber}
        onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
        placeholder="Card Number"
        required
      />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default CheckoutForm;
