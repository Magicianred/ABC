import React from "react";

//Bootstrap
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

//Search Button
const OrderBy = ({ onInputChange }) => {
    return (
        <>
            <Form.Group>
                <Form.Row className="align-items-center">
                    <Form.Label><strong>Ordina per:</strong></Form.Label>
                    <Col sm={4} xs={6} className="my-1">
                        <Form.Control
                            className="rounded-pill"
                            onChange={onInputChange}
                            as="select"
                            custom
                            id="book-sort-by"
                        >
                            <option value="relevance">Rilevanza</option>
                            <option value="newest">Nuovo</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
            </Form.Group>
        </>
    )

}

export default OrderBy;