import React from 'react';

//Bootstrap Navbar
import Navbar from "react-bootstrap/Navbar";

//Component NavBar
import NavBar from "./NavBar";

function Header() {
    return (
        <Navbar collapseOnSelect variant="dark" expand="lg">
            <Navbar.Brand href="/" className="brandfont navbar">Ace Book Club</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <NavBar />
        </Navbar>
    )
}

export default Header;