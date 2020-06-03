import React from "react";

//Bootstrap Form and Button
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

//Bootstrap Grid System
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


function Search() {
    return (
        <React.Fragment>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <br />
                        <br />
                        <br />
                        <Form inline>
                            <FormControl sm={8} type="text" placeholder="Scrivi il nome di un libro..." className=" mr-sm-2" />
                            <Button variant="dark" type="submit">Cerca</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )

}

export default Search;