import React from 'react'
import Home from './reactrouter/Home';
import Services from './reactrouter/Services';
import About from './reactrouter/About';

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
      <>
      <BrowserRouter>
      <ul>
         {/* <li><a href="/">Home</a></li>
         <li><a href="/services">Services</a></li>
         <li><a href="/about">About</a></li> */}

         <li><Link to="/">Home</Link></li>
         <li><Link to="/services">Services</Link></li>
         <li><Link to="/about">About</Link></li>
      </ul>
      
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services/:message" element={<Services/>}/>
          <Route path="/about" element={<About/>}/> 
       </Routes> 
      </BrowserRouter>  
      </>
  );
}

export default App;

// Props
