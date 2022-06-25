import React from "react";
import { NavLink } from "react-router-dom";
import navStyle from './NavBar.module.css'
import { NavBar } from 'react-bootstrap';

function FlashNavBar() {
    return (
    <nav className="navbar navbar-expand-lg bg-light" >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mycards">My Cards</NavLink>
        <NavLink to="/newcards">New Cards</NavLink>
    </nav>
    )
}

export default FlashNavBar;

