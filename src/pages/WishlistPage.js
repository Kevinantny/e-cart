// pages/CartPage.js
import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      <Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
    </div>
  );
};

export default CartPage;
