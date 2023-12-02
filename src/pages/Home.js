// pages/Home.js
import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import Item from '../components/Item';
import '../pages/Home.css'
const Home = ({ onAddToCart, onAddToWishlist }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="home">
      <h1>TeeRex TShirt Store</h1>
      <div className="item-list">
        {products.map((product) => (
          <Item
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
