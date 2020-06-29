import React from "react";

//Bootstrap
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";


//Component created by me
import SearchButton from "./SearchButton";
import ClearButton from "./ClearButton";

//Search Bar
const BookSearchForm = ({ onSubmitHandler, book, setBook, onInputChange }) => {

    return (
        <>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group
                    as={Col}
                    xl={{span:10, offset: 1}}
                    lg={{span:10, offset: 1}}
                    md={11}
                    sm={11}
                    xs={11}
                >
                    <Form.Control
                        className="position-absolute rounded-pill pl-3 pr-6"
                        type="text"
                        value={book}
                        onChange={onInputChange}
                        placeholder="Scrivi il nome di un libro..."
                        id="search-box"
                    />
                    {/*Component SearchButton*/}
                    <SearchButton />
                </Form.Group>
                {/*Clear Button*/}
                <ClearButton
                    book={book}
                    setBook={setBook}
                />

            </Form>
        </>
    );
};

export default BookSearchForm;