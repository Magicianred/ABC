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
import BookAuthors from "./BookAuthors";


const BookCard = ({ keys, title, authors }) => {

    return (
        <>
            <br />
            <br />
            <Card className="cardHome m-auto" bg="Secondary">
                <Card.Header>
                    <h5 className="section1 color text-center">
                        <TextTruncate
                            line={2}
                            element="span"
                            truncateText="…"
                            text={title}
                        />
                    </h5>
                </Card.Header>
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col xs="auto">
                            <Card.Img
                                className="justify-content-center cardImage"
                                xs="auto"
                                src={"http://books.google.com/books/content?id="+ keys + "&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"}
                                alt={title}
                            />
                        </Col>
                    </Row>
                </Container>
                <Card.Body className="text-center">
                    <p className="section2 color"><small>di <br />
                        <TextTruncate
                            line={2}
                            element="span"
                            truncateText="…"
                            text={BookAuthors(authors)}
                        /></small>
                    </p>
                </Card.Body>
                <div className="card-footer text-center bg-transparent">
                    <Link
                        target="_blank"
                        to={"/book/" + keys}
                    >
                        <Button
                            className="mt-auto"
                        >
                            Mostra Dettagli
                        </Button>
                    </Link>
                </div>
            </Card>
        </>
    );
};

export default BookCard;