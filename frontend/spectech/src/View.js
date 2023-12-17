import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './View.css';

function View() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="view-container">
      <h1 className="view-heading">PRODUCT DETAILS</h1>
      <img className="cartimg" src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" alt="cart img" />

      <div className="product-details">
        <img className="product-image" src="https://sc01.alicdn.com/kf/H266c5ceb5b4946cdb55efd9bd479bcccH/239241361/H266c5ceb5b4946cdb55efd9bd479bcccH.jpg" alt="Ramen Burger" />
        <div className="product-content">
          <h2 className="product-title">Titanium Frame</h2>
          <p className="product-description">
            Frame: Titanium <br />
            <br />
            Brand: Titan<br />
            <br />
            Rating: 5<br />
            <br />
            Price: 6000
          </p>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="product-details2">
        <img className="product-image2" src="https://i1.go-optic.com/w900%7Ch600%7Cf/G4024_318_SM_01.jpg" alt="Buddha Bowl" />
        <div className="product-content2">
          <h2 className="product-title2">Full-Rimmed Frame</h2>
          <p className="product-description2">
            Frame: Full-Rimmed <br />
            <br />
            Brand: BurBerry<br />
            <br />
            Rating: 7<br />
            <br />
            Price: 7000
          </p>
          <button className="add-to-cart-button2" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="product-details3">
        <img className="product-image3" src="https://sc04.alicdn.com/kf/H6aa91ff71c304a209d8db84857f9a98ey.jpg" alt="Rogan Josh" />
        <div className="product-content3">
          <h2 className="product-title3">Low Bridge Frame</h2>
          <p className="product-description3">
            Frame: Low Bridge <br />
            <br />
            Brand: Ray-Ban<br />
            <br />
            Rating: 8<br />
            <br />
            Price: 3000
          </p>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      <Link to="/home"> <button className="backview">Back</button></Link>
     
    </div>
  );
}

export default View;
