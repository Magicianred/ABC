import React from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

//Bootstrap
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

//Search Button
const MaxResult = ({ maxResults, setMaxResults}) => {
    return (
        <>
            <Form.Group>
                <Form.Row className="align-items-center">
                    <Form.Label><strong>Massimo Risultato</strong></Form.Label>
                    <Col sm={1} xs={6} className="my-1">
                <Form.Control
                    className="rounded-pill"
                    type='number'
                    id='maxResults'
                    placeholder='Massimo Risultato'
                    value={maxResults}
                    onChange={e => setMaxResults(e.target.value)}
                />
                <ToastContainer />
                    </Col>
                </Form.Row>
            </Form.Group>
        </>
    )

}

export default MaxResult;