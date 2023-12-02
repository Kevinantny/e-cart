// Item.js
import React from 'react';

const Item = ({ product, onAddToCart, onAddToWishlist, onMoveToWishlist, onRemoveFromCart, isCartView }) => {
  return (
    <div className="product-card">
      <img className="card-img-top" src={product.image} alt={product.name} />
      <div className="card-body">
        <div className="product-details">
          <h5 className="product-title">{product.name}</h5>
          <p className="product-price">${product.price}</p>
        </div>
        {isCartView ? (
          <div className="button-container">
            <button onClick={onMoveToWishlist}>Move to Wishlist</button>
            <button onClick={onRemoveFromCart}>Remove from Cart</button>
          </div>
        ) : (
          <div className="button-container">
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
            <button onClick={() => onAddToWishlist(product)}>Add to Wishlist</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
