import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import CardArea from './components/cardArea/CardArea';
import FlashNavBar from './components/navBar/NavBar';
import NewCards from './components/newCards/NewCards';
import Home from './components/home/Home'



function App() {

  function titleChange(pagetitle) {
    document.title = pagetitle
  }

  return (
    <div className='body'>
      <FlashNavBar />
      <Routes>
        <Route path="/" element={<Home titleChange={titleChange} />}/>
        <Route path="/mycards" element={<CardArea titleChange={titleChange} />} />
        <Route path="/newcards" element={<NewCards titleChange={titleChange} />} />
      </Routes>
    </div>
  );
}

export default App;
