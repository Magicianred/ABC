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
                    <Card border="danger" style={{width: '15rem'}} className="text-center">
                        <Card.Header as="h5" style={{color: 'red'}}>Errore</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <br />
                                Si è verificato un errore!
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