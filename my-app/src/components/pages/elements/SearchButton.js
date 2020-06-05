import React from "react";

//Bootstrap Form
import Form from "react-bootstrap/Form";

//Bootstrap Grid System
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


function SearchButton() {
    return (
        <Form.Group as={Row}>
            <Col>
                <Button variant="secondary" type="submit"><img src="images/search.png" alt="search" /></Button>
            </Col>
        </Form.Group>
    )

}

export default SearchButton;