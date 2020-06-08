import React, {useState} from "react";
import axios from 'axios';

//Bootstrap Form
import Form from "react-bootstrap/Form";

//Bootstrap Grid System
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import SearchButton from "./elements/SearchButton";



function Search() {

    //useState Hooks
    const [book, setBook] = useState('');
    const onInputChange = (e) => {
        setBook(e.target.value);
    }

    const apiKey = (process.env.REACT_APP_API_KEY);
    let URL = ("https://www.googleapis.com/books/v1/volumes");

    const getSearch = async () => {
        // Call to API using Axios
        const result = await axios.get(URL + "?q=" + book + "&key=" + apiKey + "&maxResults=40");
        // Books result
        console.log(result.data);
    }

    // Submit handler
    const onSubmitHandler = (e) => {
        // Prevent browser refreshing after form submission
        e.preventDefault();
        // Call getSearch async function
        getSearch();
    }


    return (
        <React.Fragment>
            <Container fluid>
                <Form onSubmit={onSubmitHandler}>
                    <Form.Row>
                        <Form.Group as={Col} md={{span: 6, offset: 3}} xs={{span: 8, offset: 1}}>
                            <Form.Control
                                type="search"
                                value={book}
                                onChange={onInputChange}
                                placeholder="Scrivi il nome di un libro..."
                            />
                        </Form.Group>
                        <SearchButton />
                    </Form.Row>
                </Form>
            </Container>
        </React.Fragment>
    )

}

export default Search;