import React from "react";

//Bootstrap Form and Button
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

//Bootstrap Grid System
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


function Search() {
    return (
        <React.Fragment>
            <Container fluid>
                <Row className="show-grid align-items-center">
                    <Col md={{ span: 8, offset: 2 }} xs={{span: 8, offset: 1 }}>
                            <FormControl type="text" placeholder="Scrivi il nome di un libro..." className="mr-sm-2" />
                    </Col>
                    <Col>
                            <Button variant="dark" type="submit">Cerca</Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )

}

export default Search;