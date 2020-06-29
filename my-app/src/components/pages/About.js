import React from "react";

//Bootstrap
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function About() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Jumbotron fluid className="mt-5">
                            <Container fluid>
                                <Row className="justify-content-center">
                                    <Col xs="auto">
                                        <p>
                                            <strong>Ace Book Club è una semplice web app costruita con React.js e Google Books API,
                                            che ti permetterà di cercare i libri e di poter avere anche maggiori informazioni su di essi.<br />
                                                Troverai non solo l'immagine, il titolo e l'autore, ma anche altre informazioni.</strong>
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default About;