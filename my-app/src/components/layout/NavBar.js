import React from 'react';

//Bootstrap Navigation Bar
import Nav from "react-bootstrap/Nav";

function NavBar() {
    return (
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/About">About</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar;