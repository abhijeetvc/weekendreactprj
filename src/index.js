import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import UseContextDemo from './UseContextDemo';

const message="React Demo!!!"

const person={
  name:'John',
  city:'Pune'
}

// Where to render?
const root = ReactDOM.createRoot(document.getElementById('root'));

// What has to be rendered?
root.render(
  <div>
     {/* <h1>Hello React</h1> 
     <p>This is react project!!!</p>
     <p>Message : {message}</p>
     <p>Name : {person.name}</p>
     <p>City : {person.city}</p> */}
     <App/>
     {/* <h1>Hiiiiii</h1> */}
  </div>

);


