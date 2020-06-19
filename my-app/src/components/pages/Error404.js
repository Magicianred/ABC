import React from "react";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";


function Error404() {
    return (
<>
        <Jumbotron fluid className="mt-4">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <Image className="darthVader" src="images/DarthVader.png" alt="Darth Vader" />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <h1 className="error404">ERRORE 404</h1>
                        <h5 className="error404">Tu sottovaluti il potere del lato oscuro della forza</h5>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
  </>
    )

}

export default Error404;