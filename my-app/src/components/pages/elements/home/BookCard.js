import React from "react";
import { createBrowserHistory } from 'history';
import { Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate';

//Bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//Component created by me
import {BookAuthors, AddDi} from "../BookAuthors";
import NotFound from "./NotFound";

//UI for books search result
const BookCard = ({ resultBook }) => {

    let history = createBrowserHistory();

    //Push previous parameters and text that you had searched
    function goBackHandle(){
        const searchBook = document.getElementById('search-box').value;
        const maxResults = document.getElementById('maxResults').value;
        const bookSortBy = document.getElementById('book-sort-by').value;
        const booksType = document.getElementById('books-type').value;
        history.push("/search/" + searchBook + "?maxResults=" + maxResults + "&sortBy=" + bookSortBy + "&type=" + booksType);
    }

    return (
        <>
            {
                resultBook.items ? resultBook.items.map((books, index) => (
                        <div className='col-lg-4 col-sm-6 mb-3' key={index}>
                            <br />
                            <br />
                            <Card className="cardHome m-auto border-0" bg="Secondary">
                                {/*Title*/}
                                <Card.Header>
                                    <h5 className="section1 color text-center">
                                        <TextTruncate
                                            line={2}
                                            element="span"
                                            truncateText="…"
                                            text={books.volumeInfo.title}
                                        />
                                    </h5>
                                </Card.Header>
                                {/*Image*/}
                                <Container fluid>
                                    <Row className="justify-content-center">
                                        <Col xs="auto">
                                            <Card.Img
                                                className="justify-content-center cardImage"
                                                xs="auto"
                                                src={"https://books.google.com/books/content?id="+ books.id +"&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"}
                                                alt={books.volumeInfo.title}
                                            />
                                        </Col>
                                    </Row>
                                </Container>
                                {/*Authors*/}
                                <Card.Body className="text-center">
                                    <p className="section2 color">
                                        <small>
                                            {AddDi(books.volumeInfo.authors)}
                                            <TextTruncate
                                                line={2}
                                                element="span"
                                                truncateText="…"
                                                text={BookAuthors(books.volumeInfo.authors)}
                                            />
                                        </small>
                                    </p>
                                </Card.Body>
                                {/*Button*/}
                                <div className="card-footer text-center bg-transparent">
                                    <Link to={"/book/" + books.id} onClick={goBackHandle}>
                                        <Button className="mt-auto btnCard" variant="light">
                                            Mostra Dettagli
                                        </Button>
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    )
                    ) :
                <NotFound />
            }
        </>
    )
};



export default BookCard;