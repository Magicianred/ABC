import React, {useState, useEffect } from "react";
import axios from "axios";

//Bootstrap Form
import Form from "react-bootstrap/Form";

//Search Button
import SearchButton from "./elements/SearchButton";

//Bootstrap Grid System
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import BookCard from "./elements/BookCard";


function Search() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState();
    const [submit, setSubmit] = useState(" ");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [apiKey] = useState(process.env.REACT_APP_API_KEY);


    useEffect(() => {
        axios
            .get("https://www.googleapis.com/books/v1/volumes?q=" + submit + "&key=" + apiKey + "&maxResults=40")
            .then(res => {
                setBooks(res.data.items);
                console.log(res.data);
                setIsLoading(false);
                setError(false);
            })
            .catch(err => {
                setError(true);
            });
    }, [submit]);

    const updateSeach = e => {
        setSearch(e.target.value);
        console.log(setSearch);
    };

    const getSearch = e => {
        e.preventDefault();
        setSubmit(search);

        setSearch("");
    };



    return (
        <React.Fragment>
            <Container fluid>
                <Form onSubmit={getSearch}>
                    <Form.Row>
                        <Form.Group as={Col} md={{span: 6, offset: 3}} xs={{span: 8, offset: 1}}>
                            <Form.Control
                                onChange={updateSeach}
                                type="text"
                                value={search}
                                placeholder="Scrivi il nome di un libro..."
                            />
                        </Form.Group>
                        <SearchButton/>
                    </Form.Row>
                </Form>
            </Container>

            {
                books && books.length > 0 && (
                    books.map(book => (
                        <BookCard
                            key={book.id}
                            title={book.volumeInfo.title}
                            link={book.volumeInfo.infoLink}
                            image={book.volumeInfo.imageLinks.thumbnail}
                        />
                    ))
                )
            }
            {!books && (
                <div> <p>La tua ricerca non ha riportato nessun risultato. Prova a cercare qualcos'altro.</p> </div>
            )}
        </React.Fragment>
    )

}

export default Search;