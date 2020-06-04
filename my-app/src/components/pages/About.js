import React from "react";

//Bootstrap Jumbotron
import Jumbotron from "react-bootstrap/Jumbotron";

//Bootstrap Grid System
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function About() {
    return (
        <React.Fragment>
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
            </React.Fragment>
    )

}

export default About;