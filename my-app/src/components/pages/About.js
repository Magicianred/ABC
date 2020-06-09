import React from "react";

//Bootstrap
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function About() {
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col>
                        <Jumbotron fluid className="mt-5">
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <p>Sito dedicato a tutti gli amanti dei libri!<br />
                                            Ti permetterà la ricerca di una vasta collezione di libri e delle informazioni necessarie a scoprirne il contenuto.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )

}

export default About;