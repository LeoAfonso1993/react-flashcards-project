import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import CardArea from './components/cardArea/CardArea';
import NavBar from './components/navBar/NavBar';
import NewCards from './components/newCards/NewCards';
import Home from './components/home/Home'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/mycards" element={<CardArea />} />
        <Route path="/newcards" element={<NewCards />} />
      </Routes>
    </>
  );
}

export default App;
