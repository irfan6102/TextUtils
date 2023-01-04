import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
const[mode,setMode]=useState('dark');

const onToggle=()=>{
  if(mode==='dark'){
    setMode('light');
    document.body.style.backgroundColor='grey';
  }else{
    setMode('dark');
    document.body.style.backgroundColor='white';
  }
}

   
  return (
    <>
    <Router>
    <Navbar title='TextUtils' md={mode} toggle={onToggle} />\
    <Alert />
    <Routes>
          <Route exact  path="/about" element={<About />} />
       
        
          
          <Route exact path="/" element={<TextForm heading='Enter some title here' md={mode} />} />
          
          
        </Routes>
        </Router>
   
    
    </>
  );
}

export default App;
