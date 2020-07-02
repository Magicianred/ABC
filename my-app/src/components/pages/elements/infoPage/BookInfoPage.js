import React, {useState} from "react";
import { createBrowserHistory } from 'history';
import {Link} from "react-router-dom";

//Component created by me
import {BookAuthors} from "../BookAuthors";
import {checkPrice, createDescMarkup} from "./BookInfoPageSections";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const BookInfoPage = ({ books }) => {

    const history = createBrowserHistory();
    console.log(books);

    return (
        <>
            <Container fluid className="mt-4 mb-5 mr-1">
                <Row>
                    <Col>
            {
                books && (
                    <Table responsive bordered hover>
                        <thead>
                        <tr>
                            <th colSpan="2">
                                <div className="title">
                                    {/*Back Button*/}
                                    <Button className="object" onClick={() => {history.back()}} to="#"><Image src="/images/back.png" /></Button>
                                    <div className="objectLink text-center">
                                        <h3>
                                            {/*Title*/}
                                            {books.volumeInfo.title}
                                        </h3>
                                        {/*Subtitle*/}
                                        <h6>{(books.volumeInfo && books.volumeInfo.subtitle) ? books.volumeInfo.subtitle : " "}</h6>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td colSpan="2" className="infoBG">
                                <Container fluid>
                                    <Row className="justify-content-center mt-4">
                                        <Col xs="auto">
                                            {/*Image of the book*/}
                                            <Image
                                                className="cardImage"
                                                alt={books.volumeInfo.title}
                                                src={"https://books.google.com/books/content?id=" + books.id + "&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
                                            />
                                        </Col>
                                    </Row>
                                </Container>
                            </td>
                        </tr>
                        {/*Book Info*/}
                        <tr>
                            <td><strong>Autore</strong></td>
                            <td style={{width: "50%"}}>{BookAuthors(books.volumeInfo.authors)}</td>
                        </tr>
                        <tr>
                            <td><strong>Data di pubblicazione</strong></td>
                            <td style={{width: "50%"}}>
                                {(books.volumeInfo && books.volumeInfo.publishedDate) ? books.volumeInfo.publishedDate : "Data non disponibile"}
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Prezzo</strong></td>
                            <td style={{width: "50%"}}>
                                {/*Price*/}
                                {checkPrice(books.saleInfo)}
                                &nbsp;&nbsp;
                                {/*Download Button*/}
                                <a target="_blank" rel="noopener noreferrer" href={books.saleInfo.buyLink}>
                                    <Button size="sm" variant="light" className="btnCard">Scarica</Button>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Editore</strong></td>
                            <td style={{width: "50%"}}>
                                {(books.volumeInfo && books.volumeInfo.publisher) ? books.volumeInfo.publisher : "Editore non disponibile"}
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Numero di pagine</strong></td>
                            <td style={{width: "50%"}}>
                                {(books.volumeInfo && books.volumeInfo.pageCount) ? books.volumeInfo.pageCount : "Numero non disponibile"}
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Trama</strong></td>
                            <td style={{width: "50%"}}>
                                <span dangerouslySetInnerHTML={createDescMarkup(books.volumeInfo.description)} />
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BookInfoPage;