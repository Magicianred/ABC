import React from "react";

//Component created by me
import BookAuthors from "./BookAuthors";

//Bootstrap
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const BookInfoPage = ({ books }) => {
    const createDescMarkup = description => {
        return { __html: description };
    };

    return (
        <>
            {
                books && (
                    <Card style={{}}>
                        <Card.Header className="card-title text-center"><h5 className="color">{books.volumeInfo.title}</h5></Card.Header>
                        <Container fluid>
                            <Row className="justify-content-center mt-4">
                                <Col xs="auto">
                                    <Card.Img
                                        style={{ width: '128px', height: '164px' }}
                                        alt={books.volumeInfo.title}
                                        src={"http://books.google.com/books/content?id=" + books.id + "&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
                                    />
                                </Col>
                            </Row>
                        </Container>
                        <Card.Text className="mt-4 text-center">
                        <p>
                            <strong>Autore</strong> <br />{BookAuthors(books.volumeInfo.authors)}
                        </p>

                        <p>
                            <strong>Data di pubblicazione</strong> <br />{books.volumeInfo.publishedDate}
                        </p>
                        <p>
                            <strong>Editore</strong> <br />{books.volumeInfo.publisher}
                        </p>
                        <p>
                            <strong>Numero di pagine</strong> <br />{books.volumeInfo.pageCount}
                        </p>
                        <p className="text-center">
                            <strong>Trama</strong> <br />
                            <div
                                dangerouslySetInnerHTML={createDescMarkup(
                                    books.volumeInfo.description
                                )}
                            />
                        </p>
                        </Card.Text>
                    </Card>
                )}
        </>
    );
};

export default BookInfoPage;