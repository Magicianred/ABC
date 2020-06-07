import React, {useState} from "react";

//Bootstrap Form
import Form from "react-bootstrap/Form";

//Bootstrap Grid System
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//Bootstrap Button
import Button from "react-bootstrap/Button";



function Search() {

    //useState Hooks
    const [book, setBook] = useState('');
    const onInputChange = (e) => {
        setBook(e.target.value);
    }


    return (
        <React.Fragment>
            <Container fluid>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} md={{span: 6, offset: 3}} xs={{span: 8, offset: 1}}>
                            <Form.Control
                                type="search"
                                value={book}
                                onChange={onInputChange}
                                placeholder="Scrivi il nome di un libro..."
                            />
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col>
                                <Button variant="secondary" type="submit"><img src="images/search.png" alt="search" /></Button>
                            </Col>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
        </React.Fragment>
    )

}

export default Search;