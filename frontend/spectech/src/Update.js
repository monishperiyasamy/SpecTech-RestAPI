import React, { useState, useEffect } from 'react';
import { Link, useParams,useNavigate } from 'react-router-dom';
import './Update.css'
import './AddDetails.css';

function Update() {
  const nav=useNavigate();
  const { id } = useParams();
  const [frametype, setFrametype] = useState('');
  const [brandname, setBrandname] = useState('');
  const [rating, setRating] = useState('');
  const [price, setPrice] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchFrameDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/frames/getframes/${id}`);
        if (!response.ok) {
          throw new Error('Error:' + response.status);
        }
        const data = await response.json();
        setBrandname(data.brandname);
        setFrametype(data.frametype);
        setRating(data.rating);
        setPrice(data.price);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchFrameDetails();
  }, [id]);

  const handleBrandnameChange = (e) => {
    setBrandname(e.target.value);
  };

  const handleFrametypeChange = (e) => {
    setFrametype(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/frames/updateframes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ brandname, frametype, rating, price }
         
        ),
        
       
     
        
      });
      if (!response.ok) {
        throw new Error('Error:' + response.status);
      }
      const data = await response.json();
      setResponse(data);
      alert("Details Updated successfully");
      nav("/display");
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='updatebg' >
    <div className='updateform'>
      <h1 className='updateframes'>UPDATE FRAMES</h1>
      <form>
        <label>
        BRANDNAME: <input type="text" value={brandname.toString()} onChange={handleBrandnameChange} />
        </label>
        <br />
        <br/>
        <label>
        FRAME TYPE: <input type="text" value={frametype.toString()} onChange={handleFrametypeChange} />
        </label>
        <br />
        <br/>
        <label className='rating'>
        RATING: <input type="text" value={rating.toString()} onChange={handleRatingChange} />
        </label>
        <br />
        <br/>
        <label className='price'>
        PRICE: <input type="text" value={price.toString()} onChange={handlePriceChange} />
        </label>
        <br />
        <br/>
        <div>
     
        <button className= 'updatebutton' onClick ={handleSubmit}type="submit">UPDATE</button>
        
        <Link to="/display">
        <button className= 'cancelubutton'type="submit">CANCEL</button></Link>
        </div>
      </form>
      
    </div>
    </div>
  );
}

export default Update;
