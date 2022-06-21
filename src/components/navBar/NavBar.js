import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
    <div>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/mycards">My Cards</NavLink>
        <NavLink to="/newcards">New Cards</NavLink>
    </div>
    )
}

export default NavBar;

