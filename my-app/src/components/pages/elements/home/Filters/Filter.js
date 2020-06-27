import React from "react";

//Bootstrap
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

//Search Button
const Filter = ({ onInputChange }) => {
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
                            id="books-type"
                        >
                            <option value="full" title="Restituisce solo risultati in cui tutto il testo è visualizzabile">Risultati Completamente Visualizzabili</option>
                            <option value="partial" title="Restituisce risultati in cui almeno parti del testo sono visualizzabili in anteprima">Risultati Parziali</option>
                            <option value="free-ebooks" title="Restituisce solo risultati che sono Google eBooks gratuiti">Ebook Gratuiti</option>
                            <option value="paid-ebooks" title="Restituisce solo risultati che sono Google eBooks con un prezzo">Con Prezzo</option>
                            <option value="ebooks" title="Restituisce solo risultati Google eBooks, a pagamento o gratuiti">Ebook Gratuiti e a Pagamento</option>
                            {/*Examples of non-eBooks would be publisher content that is available in limited preview and not for sale, or magazines.*/}
                        </Form.Control>
                    </Col>
                </Form.Row>
            </Form.Group>
        </>
    )

}

export default Filter;