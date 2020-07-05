import React from "react";

//Bootstrap
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

//Search Button
const Filter = ({ onInputChange, filterBy }) => {
    return (
        <>
            <Col sm={11} xs={11} lg={4} xl={4} className="my-1">
            <Form.Group as={Col}>
                    <Form.Label><strong>Filtro:</strong></Form.Label>
                        <Form.Control
                            className="rounded-pill"
                            onChange={onInputChange}
                            as="select"
                            custom
                            id="books-type"
                            value={filterBy}
                        >
                            <option value="partial" title="Restituisce risultati in cui è visualizzabile solo una parte del testo">Risultati Non Completi</option>
                            <option value="full" title="Restituisce solo risultati in cui tutto il testo è visualizzabile">Risultati Completi</option>
                            <option value="free-ebooks" title="Restituisce solo risultati che sono Google eBooks gratuiti">Ebook Gratuiti</option>
                            <option value="paid-ebooks" title="Restituisce solo risultati che sono Google eBooks con un prezzo">Ebook a Pagamento</option>
                            <option value="ebooks" title="Restituisce solo risultati Google eBooks a pagamento o gratuiti">Ebook Gratuiti e a Pagamento</option>
                            {/*Examples of non-eBooks would be publisher content that is available in limited preview and not for sale, or magazines.*/}
                        </Form.Control>
            </Form.Group>
            </Col>
        </>
    )

}

export default Filter;