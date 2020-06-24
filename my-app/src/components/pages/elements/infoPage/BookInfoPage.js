import React from "react";
import {Link} from "react-router-dom";

//Component created by me
import BookAuthors from "./../BookAuthors";

//Bootstrap
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

const BookInfoPage = ({ books }) => {

    //If there is a plot or not
    const createDescMarkup = (description) => {
        if (description === undefined) return {__html: "Trama non disponibile"};
        return { __html: description };
    };

    return (
        <>
            {
                books && (
                    <Card className="border-0 infoBG">
                        <Card.Header className="card-title color">
                            {/*Back Button*/}
                            <Link to={`/`}><Image src="/images/back.png" /></Link>
                            <h3>
                                {/*Title*/}
                                {books.volumeInfo.title}
                            </h3><br />
                            {/*Subtitle*/}
                            <h6>{books.volumeInfo.subtitle}</h6>
                        </Card.Header>
                        <Container fluid>
                            <Row className="justify-content-center mt-4">
                                <Col xs="auto">
                                    {/*Image of the book*/}
                                    <Image
                                        className="cardImage"
                                        alt={books.volumeInfo.title}
                                        src={"http://books.google.com/books/content?id=" + books.id + "&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
                                    />
                                </Col>
                            </Row>
                        </Container>

                        {/*Book Info*/}
                        {/*First Column*/}
                        <Row>
                            <Col className="col1">
                                <ListGroup className="mt-4">
                                    <ListGroup.Item className="border-0 infoBG">
                                        <strong>Autore: </strong>{BookAuthors(books.volumeInfo.authors)}
                                    </ListGroup.Item>
                                    <ListGroup.Item className="border-0 infoBG">
                                        <strong>Data di pubblicazione: </strong>{books.volumeInfo.publishedDate}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>

                            {/*Second Column*/}
                            <Col className="col2">
                                <ListGroup className="mt-4">
                                    <ListGroup.Item className="border-0 infoBG">
                                        <strong>Editore: </strong>{books.volumeInfo.publisher}
                                    </ListGroup.Item>
                                    <ListGroup.Item className="border-0 infoBG">
                                        <strong>Numero di pagine: </strong>{books.volumeInfo.pageCount}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>

                        {/*Plot*/}
                        <br />
                        <div className="text-center">
                            <strong>Trama</strong> <br />
                            <span
                                dangerouslySetInnerHTML={createDescMarkup(
                                    books.volumeInfo.description
                                )}
                            />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                    </Card>
                )}
        </>
    );
};

export default BookInfoPage;