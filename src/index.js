import React from 'react';
import ReactDOM from 'react-dom/client';
import Demo from './Demo';
import Auto from './Auto'

import StateDemo from './StateDemo';
import StateDemoClass from './StateDemoClass';
import InputRead from './InputRead';
import PropsDemo from './PropsDemo';
import PropsList from './PropsList';
import LifeCycleMethdos from './LifeCycleMethods';
import UseEffectDemo from './UseEffectDemo';

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
     <UseEffectDemo/>
  </div>

);


