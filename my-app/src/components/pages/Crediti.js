import React from "react";

//Bootstrap
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


function Crediti() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Jumbotron fluid className="mt-4 text-center">
                            <h1>Crediti</h1>
                            <p></p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Crediti;