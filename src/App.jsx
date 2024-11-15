// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import AuthPage from './pages/AuthPage';
import './styles/App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
