import React from "react";

//Bootstrap
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Loading = ({ loading }) =>  {
    return (
        <>
        {
            loading && (
            <Container fluid>
                <br />
                <br />
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <Spinner animation="border" size="md" variant="light"/>
                    </Col>
                </Row>
            </Container>
        )
}
        </>
    );
};

export default Loading;