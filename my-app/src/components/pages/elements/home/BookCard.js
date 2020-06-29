import React from "react";
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

//UI for books search result
const BookCard = ({ resultBook }) => {
    return (
        <>
            {
                resultBook && resultBook.items.map((books, index) => (
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
                                    <Link target="_blank" to={"/book/" + books.id}>
                                        <Button className="mt-auto btnCard" variant="light">
                                            Mostra Dettagli
                                        </Button>
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    )
                )
            }
        </>
    )
};



export default BookCard;