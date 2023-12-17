import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';//
import "./AddDetails.css"
function AddDetails() {
  
  const Navigate=useNavigate();
  //const[prdtId,setprdtId]=useState('');
  const[frametype,setframetype]=useState('');
  const[brandname,setbrandname]=useState('');
  const[rating,setrating]=useState('');
  const[price,setprice]=useState('');
  

  const sendtodb=(e)=>{
    e.preventDefault()
    const details={frametype,brandname,rating,price}
    if(frametype.length===0||brandname.length===0||rating.length===0||price.length===0){
      alert("Enter All fields")
    }
    else{
    fetch("http://localhost:8080/frames/postframes",
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(details)
    }
    ).then(()=>{
      console.log("New Detail Added");   
      console.log(JSON.stringify(details));
      console.log(e);
      alert("thanks");
    Navigate("/display");
    
      
    })
  }
}
  return (
    <div id="addbody">
    
    <div className='addform'>
  <div className='addbox'>
    <div className='addheader'>
      <h1>FRAME INFO</h1>
    </div>
    <form>
      {/* {<div className="addinput">
         <i className="fa-solid fa-user"></i>
         <input type="text" value={prdtId} onChange={(e)=>setprdtId(e.target.value)} placeholder="PRODUCT ID" />  
      </div> }  */}
      <div className="addinput">
        <i className="fa-solid fa-user"></i>
        <input type="text" value={frametype} onChange={(e)=>setframetype(e.target.value)} placeholder="FRAME TYPE" />
      </div>
      <div className="addinput">
        <i className="fa-solid fa-envelope"></i>
        <input type="text" value={brandname} onChange={(e)=>setbrandname(e.target.value)} placeholder="BRAND NAME" />
      </div>
      <div className="addinput">
        <i className="fa-solid fa-user"></i>
        <input type="text"   value={rating} onChange={(e)=>setrating(e.target.value)} placeholder="RATING" />
      </div>
      <div className="addinput">
        <i className="fa-solid fa-envelope"></i>
        <input type="text"   value={price} onChange={(e)=>setprice(e.target.value)} placeholder="PRICE" />
      </div>  
   
     <Link to="/display">
     <input className="addsignup-btn" onClick={sendtodb} type="submit" value="SAVE" />
     <input className='cancelsignup-btn' type ="submit" value="CANCEL"/>
     </Link>
    
    </form>

  </div>
</div>
</div>
  )
}

export default AddDetails;