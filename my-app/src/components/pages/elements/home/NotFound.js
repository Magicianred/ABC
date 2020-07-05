import React from "react";

//Bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


const NotFound = () => {
    return (
        <>
                    <Container fluid>
                        <br />
                        <br />
                        <Row className="justify-content-center">
                            <Col xs="auto">
                                <Card border="danger" style={{width: '15rem'}} className="text-center">
                                    <Card.Header as="h5" style={{color: 'red'}}>Errore</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            <br />
                                            Non Trovato!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
        </>
    );
};

export default NotFound;