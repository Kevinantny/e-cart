// Cart.js
import React from 'react';
import Item from '../components/Item';

const Cart = ({ cartItems, onMoveToWishlist, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <div className="item-list">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Item
              key={item.id}
              product={item}
              onMoveToWishlist={() => onMoveToWishlist(item)}
              onRemoveFromCart={() => onRemoveFromCart(item)}
              isCartView
            />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
