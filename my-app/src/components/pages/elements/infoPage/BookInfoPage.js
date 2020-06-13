import React from "react";

//Component created by me
import BookAuthors from "./BookAuthors";

//Bootstrap
import Card from "react-bootstrap/Card";

const BookInfoPage = ({ books }) => {
    const createDescMarkup = description => {
        return { __html: description };
    };

    return (
        <>
            {
                books && (
                    <Card>
                        <Card.Header className="card-title text-center"><strong>{books.volumeInfo.title}</strong></Card.Header>
                            <Card.Img
                                style={{ width: '128px', height: '164px' }}
                                alt={books.volumeInfo.title}
                                src={"http://books.google.com/books/content?id=" + books.id + "&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
                            />
                        <Card>
                                <p>
                                    <strong>Di:</strong> {BookAuthors(books.volumeInfo.authors)}
                                </p>

                                <p>
                                    <strong>Data di pubblicazione:</strong> {books.volumeInfo.publishedDate}
                                </p>
                                <p>
                                    <strong>Editore:</strong> {books.volumeInfo.publisher}
                                </p>
                                <p>
                                    <strong>Numero di pagine:</strong> {books.volumeInfo.pageCount}
                                </p>
                                <div
                                    dangerouslySetInnerHTML={createDescMarkup(
                                        books.volumeInfo.description
                                    )}
                                />
                        </Card>
                    </Card>
                )}
            </>
    );
};

export default BookInfoPage;