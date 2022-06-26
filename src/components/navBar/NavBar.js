import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav } from 'react-bootstrap';


function FlashNavBar() {

    function handlelink(e) {
        console.log(e.value)
    }

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand href="#home">TechPrep</Navbar.Brand>
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
