import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='homebg'>
      <h1 className='spectech'>SPECTECH</h1>
      <h2 className="section-heading">TRENDING NOW</h2>
      <Link to="/viewproduct">
      <button className="view-products-button">View Products</button>
      </Link>
      <div className="row">
        <div className="card">
          
          <img className="card-image" src="https://sc01.alicdn.com/kf/H266c5ceb5b4946cdb55efd9bd479bcccH/239241361/H266c5ceb5b4946cdb55efd9bd479bcccH.jpg" alt="Ramen Burger" />
          <div className="card-content">
            <h4><b>Titanium Frame</b></h4>
            <button className="view-button">Buy</button>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src="https://www.eyedestination.com/store/wp-content/uploads/2020/06/CARRERA159VF_807_P00-1.jpg" alt="Buddha Bowl" />
          <div className="card-content">
            <h4><b>Full-Rimmed Frame</b></h4>
            <button className="view-button">Buy</button>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src="https://sc04.alicdn.com/kf/H6aa91ff71c304a209d8db84857f9a98ey.jpg" alt="Rogan Josh" />
          <div className="card-content">
            <h4><b>Low Bridge Frame</b></h4>
            <button className="view-button">Buy</button>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src="https://i.etsystatic.com/38267807/r/il/9b7c1b/4382680724/il_fullxfull.4382680724_s561.jpg" alt="Cloud Eggs" />
          <div className="card-content">
            <h4><b>Wire Frame</b></h4>
            <button className="view-button">Buy</button>
          </div>
        </div>
      </div>
      <h2 className="section-heading">STYLISH FRAMES</h2>
      <div className="row">
        <div className="card">
          <img className="card-image" src="https://www.eyedocshoppe.com/images/D/rayban_vista_0rx3578v_2905_brown_on_arista.jpg" alt="Chicken Biryani" />
          <div className="card-content">
            <h4><b>Rimless Frame</b></h4>
            <button className="view-button">Buy</button>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-&-computer-glasses:-black-full-rim-wayfarer-lenskart-blu-lb-e14058-c8_g_1795_7_20_22.jpg" alt="Palak Paneer" />
          <div className="card-content">
            <h4><b>Plastic Frame</b></h4>
            <button className="view-button">Buy</button>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src="https://www.eyedestination.com/store/wp-content/uploads/2020/08/7A513_DDB_P00-scaled.jpg" alt="Spaghetti with Veggie Balls" />
          <div className="card-content">
            <h4><b>Meta Frame</b></h4>
            <button className="view-button">Buy</button>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src="https://i1.go-optic.com/w900%7Ch600%7Cf/G4024_318_SM_01.jpg" alt="Mango Lassi" />
          <div className="card-content">
            <h4><b>Full Frame</b></h4>
            <button className="view-button">Buy</button>
          </div>
        </div>
      </div>
     
      <Link to="/"> <button className="backhome">Back</button></Link>

    </div>
  );
}

export default Home;
