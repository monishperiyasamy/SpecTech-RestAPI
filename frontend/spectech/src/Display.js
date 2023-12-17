import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Display.css';

function Display() {
 
  const [details, setDetails] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [sortBy, setSortBy] = useState('');
  


  useEffect(() => {
    fetchFrames();
  }, [page, size, sortBy]);

  const fetchFrames = () => {
    axios
      .get(`http://localhost:8080/frames/getframes?page=${page}&size=${size}&sortBy=${sortBy}`)
      .then((response) => {
        setDetails(response.data.content);
      })
      .catch((error) => console.log(error));
  };

  const deleteFrames = (frameId) => {
    if (window.confirm('Sure to Delete?')) {
      axios
        .delete(`http://localhost:8080/frames/deleteframes/${frameId}`)
        .then((response) => {
          fetchFrames();
        })
        .catch((error) => console.log(error));
    }
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const goToPreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <div className="bg">
      
        <div className="tcontent">
          <div className="write">
          <h1 className="heading">
          
              <Link to="/adddetails">
                <Link to="/"> <button className='backbutt'>Back</button></Link>
               
                <button className="add">Add</button>
              </Link>
              SPECTACLES DETAILS
            </h1>
            <div className="pagination-sort">
              <div>
                <label htmlFor="page">Page:</label>
                <input
                  type="number"
                  id="page"
                  value={page}
                  onChange={(e) => setPage(parseInt(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="size">Size:</label>
                <input
                  type="number"
                  id="size"
                  value={size}
                  onChange={(e) => setSize(parseInt(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="sortBy">Sort By:</label>
                <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="prdtId">Product ID</option>
                  <option value="brandname">Brand Name</option>
                  <option value="frametype">Frame Type</option>
                  <option value="rating">Rating</option>
                  <option value="price">Price</option>
                </select>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>PRODUCT ID</th>
                  <th>BRAND NAME</th>
                  <th>FRAME TYPE</th>
                  <th>RATING</th>
                  <th>PRICE</th>
                  <th>UPDATE</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody className="detailsfont">
                {details.map((frame) => (
                  <tr key={frame.prdtId}>
                    <td>{frame.prdtId}</td>
                    <td>{frame.brandname}</td>
                    <td>{frame.frametype}</td>
                    <td>{frame.rating}</td>
                    <td>{frame.price}</td>
                    <td>
                      <Link to={`/update/${frame.prdtId}`}>
                        <button className="sub">Update</button>
                      </Link>
                    </td>
                    <td>
                      <button className="del" onClick={() => deleteFrames(frame.prdtId)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <button className="pagination-arrow" onClick={goToPreviousPage} disabled={page === 0}>
                &lt;
              </button>
              <button className="pagination-arrow" onClick={goToNextPage}>
                &gt;
              </button>
              
            </div>
          
          </div>
        </div>
      
     
      </div>
    </>
  );
}

export default Display;