import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import CardArea from './components/cardArea/CardArea';
import FlashNavBar from './components/navBar/NavBar';
import NewCards from './components/newCards/NewCards';
import Home from './components/home/Home'



function App() {
  return (
    <div className='body'>
      <FlashNavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mycards" element={<CardArea />} />
        <Route path="/newcards" element={<NewCards />} />
      </Routes>
    </div>
  );
}

export default App;
