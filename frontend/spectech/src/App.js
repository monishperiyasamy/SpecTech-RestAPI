import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import SlidingSignupLogin from './SlidingSignupLogin';


import Display from './Display';
//import { Route } from 'react-router-dom';
import Update from './Update';

import AddDetails from './AddDetails';
import Home from './Home';
import View from './View';
//import AddDetails from './AddDetails';




const App = () => {
  return (
    <div>
       <BrowserRouter>

     <Routes>
      <Route path="/" element={<SlidingSignupLogin/>}/>
      <Route path='/display' element={<Display/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/adddetails' element={<AddDetails/>}/>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/viewproduct' element={<View/>}></Route>
     
     </Routes>

     </BrowserRouter> 
    
    </div>
  );
};

export default App;