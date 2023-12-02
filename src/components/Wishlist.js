// Wishlist.js (or Cart.js)
import React from 'react';

const Wishlist = ({ wishlistItems }) => {
  return (
    <div>
      <h2>Wishlist</h2>
      {wishlistItems && wishlistItems.length > 0 ? (
        wishlistItems.map((item) => (
          <div key={item.id}>
            {/* Your rendering logic for each wishlist item */}
            <p>{item.name}</p>
          </div>
        ))
      ) : (
        <p>Your wishlist is empty</p>
      )}
    </div>
  );
};

export default Wishlist;
