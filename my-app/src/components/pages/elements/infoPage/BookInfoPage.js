import React from 'react';

const BookInfoPage = ({ book }) => {
    const createDescMarkup = description => {
        return { __html: description };
    };

    return (
        <>
            {
                book && (
                    <section>
                        <div>
                            <img
                                alt={book.volumeInfo.title}
                                src={"http://books.google.com/books/content?id=" + book.id + "&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
                            />
                            <div>
                                <h3>
                                    <strong>Titolo:</strong> {book.volumeInfo.title}
                                </h3>

                                <p>
                                    <strong>Data di pubblicazione:</strong> {book.volumeInfo.publishedDate}
                                </p>
                                <p>
                                    <strong>Editore:</strong> {book.volumeInfo.publisher}
                                </p>
                                <p>
                                    <strong>Numero di pagine:</strong> {book.volumeInfo.pageCount}
                                </p>
                                <div
                                    dangerouslySetInnerHTML={createDescMarkup(
                                        book.volumeInfo.description
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