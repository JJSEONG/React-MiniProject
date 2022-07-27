import './App.css';
import './fonts/fonts.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Main from './components/Main';
import Signup from './components/Signup';
import AddPost from './components/AddPost';
import Detail from './components/Detail';

import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element ={<Login />} />
        <Route path="/selecthing" element = {<Main /> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/newBoards" element = {<AddPost />} />
        <Route path="/boards/:id/details" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;