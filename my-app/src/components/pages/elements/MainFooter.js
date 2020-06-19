import React from "react";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function MainFooter() {
    return (
        <>
            <Navbar fixed="bottom">
                <a className="navbar" href="https://www.carmensantoro.it">© 2020 Carmen Agnese Santoro</a>
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="/Crediti" className="navbar">Crediti</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MainFooter;