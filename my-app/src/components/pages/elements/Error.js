import React from "react";

//Bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


const Error = ({ error }) => {
    return (
        <>
            {
                error && (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs="auto">
                    <Card border="danger" style={{width: '18rem'}} className="text-center">
                        <Card.Header as="h5">Errore</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Si è verificato un errore durante il recupero dell'API
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
            )}
        </>
    );
};

export default Error;