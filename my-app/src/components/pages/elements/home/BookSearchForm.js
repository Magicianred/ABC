import React from "react";

//Bootstrap
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

//Component created by me
import SearchButton from "./SearchButton";

const BookSearchForm = ({
                            onSubmitHandler,
                            book,
                            onInputChange,
                        }) => {
    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Row>
                <Form.Group
                    as={Col}
                    md={{span: 8, offset: 2}}
                    sm={{span: 8, offset: 2}}
                    xs={{span: 10, offset: 0}}
                >
                    <Form.Control
                        type="text"
                        value={book}
                        onChange={onInputChange}
                        placeholder="Scrivi il nome di un libro..."
                        required
                    />
                </Form.Group>
                {/*Add the component SearchButton*/}
                <SearchButton />
            </Form.Row>
        </Form>
    );
};

export default BookSearchForm;