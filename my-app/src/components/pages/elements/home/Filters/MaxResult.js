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
        <Col sm={11} xs={11} lg={4} xl={4} className="my-1">
            <Form.Group as={Col}>
                    <Form.Label><strong>Massimo Risultato:</strong></Form.Label>
                <Form.Control
                    className="rounded-pill"
                    type='number'
                    id='maxResults'
                    placeholder='Massimo Risultato'
                    value={maxResults}
                    onChange={e => setMaxResults(e.target.value)}
                />
                <ToastContainer />
            </Form.Group>
        </Col>
        </>
    )

}

export default MaxResult;