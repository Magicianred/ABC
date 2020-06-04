import React, {useState} from "react";
import axios from "axios";

//Bootstrap Form and Button
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//Bootstrap Grid System
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Search() {

    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const apiKey = useState(process.env.REACT_APP_API_KEY);

    function handleChange(event) {
        const book = event.target.value;
        setBook(book);
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40")
            .then(data => {
                setResult(data.data.items);
            })
    }
    return (
        <React.Fragment>
            <Container fluid>
                <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Group>
                            <Form.Control
                                onChange={handleChange}
                                md={{ span: 8, offset: 2 }}
                                xs={{span: 8, offset: 1 }}
                                type="text"
                                placeholder="Scrivi il nome di un libro..."
                            />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col>
                    <Button variant="dark" type="submit"><img src="../images/search.png" alt="search" /></Button>
                        </Col>
                    </Form.Group>
                </Form.Row>
                </Form>
            </Container>

            {result.map(book => (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
            ))}
        </React.Fragment>
    );

}

export default Search;