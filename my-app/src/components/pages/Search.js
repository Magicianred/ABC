import React, {useState} from "react";
import axios from 'axios';

//Bootstrap Form
import Form from "react-bootstrap/Form";

//Bootstrap Grid System
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";

//Component created by me
import SearchButton from "./elements/SearchButton";
import BookCard from "./elements/BookCard";
import Error from "./elements/Error";


function Search() {

    //useState Hooks
    const [book, setBook] = useState('');
    //Updating books search result to state
    const [resultBook, setResultBook] = useState({ items: [] });
    //Error if you click the search button with empty input value
    const [error, setError] = useState(false);

    const onInputChange = (e) => {
        setBook(e.target.value);
    }

    const apiKey = (process.env.REACT_APP_API_KEY);
    let URL = ("https://www.googleapis.com/books/v1/volumes");

    const getSearch = async () => {
        setError(false);
        try {
            // Call to API using Axios
            const result = await axios.get(URL + "?q=" + book + "&key=" + apiKey + "&maxResults=40");
            // Books result
            setResultBook(result.data);
        }
            //Call error if you click the search button with empty input value.
        catch(error) {
            setError(true);
        }
    }

    // Submit handler
    const onSubmitHandler = (e) => {
        // Prevent browser refreshing after form submission
        e.preventDefault();
        // Call getSearch async function
        getSearch();
    }

    //UI for books search result
    const items = resultBook.items.map((books, index) => {
            return (
                <div key={index}>
                    <BookCard
                        keys={books.id}
                        title={books.volumeInfo.title}
                    />
                </div>
            );
        }
    )


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
                        {/*Add the component SearchButton*/}
                        <SearchButton />
                    </Form.Row>
                </Form>


                {/*Show the error to the user*/}
                {
                    error && <Error />
                }


                {/*Search result*/}
                <CardDeck>{items}</CardDeck>
            </Container>
        </React.Fragment>
    )

}

export default Search;