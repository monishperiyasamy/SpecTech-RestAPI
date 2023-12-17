import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './SlidingSignupLogin.css';


 

const SlidingSignupLogin = () => {
  
  const nav=useNavigate();
  const [isSignIn, setSignIn] = useState(false);
  const[email,setemail]=useState('');
  const[username,setUsername]=useState('');
  const[password,setpassword]=useState('');
  const senddb=(e)=>{
    e.preventDefault()
    const details={email,password,username}
    if(email.length===0||password.length===0||username.length===0){
      alert("Enter All fields")
     
    }
  
    else{
    fetch("http://localhost:8080/cred/signup",
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(details)
    }
    ).then(()=>{
      console.log("New Detail Added");   
      console.log(JSON.stringify(details));
      console.log(e);
      alert("Congratulation...Continue with Sign In !")
    
      
    })
  }
}

  const handleToggle = () => {
    setSignIn(!isSignIn);
   
  };
 
  const[user,setUser]=useState('');
  const fetchData = () => {
    return fetch("http://localhost:8080/login/get")
    .then((response) => response.json())
    .then((data) => setUser(data));
  }
  useEffect(() => {
    fetchData();
  },[])
  const authenticate=(e)=>{
    e.preventDefault()
  const usercheck = user.find(user => (user.email === email && user.password === password && user.username ===username));

  if (email.length === 0 || password.length === 0 || username.length === 0) {
  alert("Enter all fields");
} 

else if (email === "admin@gmail.com" && password === "admin123" && username === "admin") {
  alert("Congratulations! You Are Successfully Signed In!");
  nav("/display");
} 
else if (email!=="admin@gmail.com"&&password!=="admin123" && username !=="admin")
  { 
    
    nav("/home")
  }
  else if(!usercheck){
    alert("Wrong Username or Password!")
    nav("/")
  }
  
  
 
}


  return (
    <div className="monsliding-signup-login">
      <div className={`monform-container ${isSignIn ? 'login' : 'signup'}`}>
        <h2>{isSignIn ? 'Log In' : 'Sign Up'}</h2>
        <form>
          {isSignIn? (
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
          ) : (
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}  placeholder="Username" />
          )}
          <br></br>
          <input type="email" value={email} onChange={(e)=>setemail(e.target.value) }placeholder="Email" />
          <br></br>
          <input type="password" value={password} onChange={(e)=>setpassword(e.target.value) } placeholder="Password" />
          <br></br>
         
       <Link to="/display">  <button onClick={isSignIn ?authenticate: senddb} type="submit" className="slidingbutton" >
           {isSignIn ? 'Log In' : 'Sign Up'}</button></Link>
           <br></br>
  

        </form>
        <p>
          
          {isSignIn ? "Don't have an account?" : 'Already have an account?'}
          <a href="#" onClick={handleToggle}>
            <Link className='monsigncolor'>
            {isSignIn ? 'Create it!' : 'Sign In'}</Link>
          </a>
        </p>
      </div>
    </div>
  );
};

export default SlidingSignupLogin;
