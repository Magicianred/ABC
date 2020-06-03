import React from 'react';

//Bootstrap Navbar
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function NavBar() {
    return (
        <Navbar.Collapse className="justify-content-end">
            <Nav>
                <Nav.Link href="/" >Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    )
}

export default NavBar;