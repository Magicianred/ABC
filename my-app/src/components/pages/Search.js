import React, {useState} from "react";
import axios from "axios";

//Bootstrap Form
import Form from "react-bootstrap/Form";

//Search Button
import SearchButton from "./element/SearchButton";

//Bootstrap Grid System
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
                    <Form.Group as={Col} md={{ span: 6, offset: 3 }} xs={{span: 8, offset: 1 }}>
                            <Form.Control
                                onChange={handleChange}
                                type="text"
                                placeholder="Scrivi il nome di un libro..."
                            />
                    </Form.Group>
                    <SearchButton />
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