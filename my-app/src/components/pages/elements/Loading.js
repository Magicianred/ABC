import React from "react";

//Bootstrap
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Loading() {
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Spinner animation="border" size="md" variant="secondary" />
                </Col>
            </Row>
        </Container>
    )
}

export default Loading;