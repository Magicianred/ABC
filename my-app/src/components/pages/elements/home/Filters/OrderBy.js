import React from "react";

//Bootstrap
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

//Search Button
const OrderBy = ({ onInputChange, orderBy }) => {
    return (
        <>
        <Col sm={11} xs={11} lg={4} xl={4} className="my-1">
            <Form.Group as={Col} className="mx-3">
                    <Form.Label><strong>Ordina per:</strong></Form.Label>
                        <Form.Control
                            className="rounded-pill"
                            onChange={onInputChange}
                            as="select"
                            custom
                            id="book-sort-by"
                            value={orderBy}
                        >
                            <option value="relevance">Rilevanza</option>
                            <option value="newest">Nuovo</option>
                        </Form.Control>
            </Form.Group>
        </Col>
        </>
    )

}

export default OrderBy;