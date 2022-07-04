import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import myProject from "../Myproject.png"
import navStyle from "./NavBar.module.css"


function FlashNavBar() {

    function handlelink(e) {
        console.log(e.value)
    }

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <img src={myProject} alt="myproject" className={navStyle.logo} />
            <Navbar.Brand className={navStyle.txt} href="#home">echPrep</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/newcards">New Card</Nav.Link>
                <Nav.Link href="/mycards">My Cards</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>   
    )
}

export default FlashNavBar;
