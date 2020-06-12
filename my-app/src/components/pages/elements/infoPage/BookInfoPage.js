import React from "react";

//Component created by me
import BookAuthors from "./BookAuthors";

const BookInfoPage = ({ books }) => {
    const createDescMarkup = description => {
        return { __html: description };
    };

    return (
        <>
            {
                books && (
                    <section>
                        <div>
                            <img
                                alt={books.volumeInfo.title}
                                src={"http://books.google.com/books/content?id=" + books.id + "&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
                            />
                            <div>
                                <h3>
                                    <strong>Titolo:</strong> {books.volumeInfo.title}
                                </h3>

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
                            </div>
                        </div>
                    </section>
                )}
            </>
    );
};

export default BookInfoPage;