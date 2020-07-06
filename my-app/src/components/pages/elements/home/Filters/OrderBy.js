import React from "react";

//Bootstrap
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

//Search Button
const OrderBy = ({ onInputChange, orderBy }) => {
    return (
        <>
        <Col xs={12} sm={12} md={{span:8, offset: 2}} lg={{span:4, offset:0}} xl={4} className="my-1">
            <Form.Group as={Col}>
                    <Form.Label><strong>Ordina per:</strong></Form.Label>
                        <Form.Control
                            className="rounded-pill"
                            onChange={onInputChange}
                            as="select"
                            custom
                            id="book-sort-by"
                            defaultValue={orderBy || undefined}
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