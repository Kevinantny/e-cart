// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import './App.css';  // Import your CSS file here
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== product.id)
    );
  };

  const handleAddToWishlist = (product) => {
    setWishlistItems((prevWishlistItems) => [...prevWishlistItems, product]);
  };

  const handleMoveToCart = (product) => {
    setWishlistItems((prevWishlistItems) =>
      prevWishlistItems.filter((item) => item.id !== product.id)
    );
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <Router>
      <div>
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link className="navbar-brand" to="/">
                TeeRex Store
              </Link>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="d-flex">
                <Link to="/wishlist" className="nav-link">
                  Wishlist <i className="fas fa-heart p-2"></i>
                </Link>
                <Link to="/cart" className="nav-link">
                  Cart <i className="fas fa-shopping-cart p-2"></i>
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <Home
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
              />
            }
          />
          <Route
            path="/cart"
            element={<CartPage cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />}
          />
          <Route
            path="/wishlist"
            element={<WishlistPage wishlistItems={wishlistItems} onMoveToCart={handleMoveToCart} />}
          />
        </Routes>

        {/* ... rest of your code */}
      </div>
    </Router>
  );
}

export default App;
