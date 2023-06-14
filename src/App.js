//Package imports
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


//Components imports
import ToDoList from './Screens/ToDoList'
import './App.css'
import TextToVoice from './Screens/TextToVoice';

const App = ( ) => {
   

  return (

    <Router>
    <Routes>
      <Route  path="/BucketLists" element={<ToDoList/>} />
      <Route  path="/" element={<ToDoList/>} />
      <Route  path="/TextToVoice" element={<TextToVoice/>} />
       
    </Routes>
  </Router>
   
  )
};

 

 

export default App;