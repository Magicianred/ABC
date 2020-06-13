import React from "react";
import { Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate';

//Bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//Component created by me
import BookAuthors from "./BookAuthors";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";


const BookCard = ({ keys, title, authors }) => {

    return (
                <Col>
        <Card className="text-center cardHome" bg="Secondary">
            <Container fluid className="cardImageBg">
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <Card.Img className="justify-content-center cardImage" xs="auto" src={"http://books.google.com/books/content?id="+ keys + "&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"} alt={title} />
                    </Col>
                </Row>
            </Container>
            <Card.Body className="d-flex flex-column">
                <strong>
                    <TextTruncate
                        line={2}
                        element="span"
                        truncateText="…"
                        text={title}
                    />
                </strong>
                <Card.Text>
                    <hr />
                    <TextTruncate
                        line={2}
                        element="span"
                        truncateText="…"
                        text={BookAuthors(authors)}
                    />
                    </Card.Text>
                <Link target="_blank" to={"/book/" + keys}><Button variant="dark" className="mt-auto">Mostra Dettagli</Button></Link>
            </Card.Body>
        </Card>
                </Col>

    );
};

export default BookCard;