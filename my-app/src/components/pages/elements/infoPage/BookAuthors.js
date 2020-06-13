import React from "react";

const BookAuthors = (authors) => {
    if (!authors) return ' Autore Anonimo ';
    if (authors.length <= 2) {
        authors = authors.join(' e ')
    }
    else if (authors.length > 2) {
        let lastAuthor = ' e ' + authors.slice(-1);
        authors.pop();
        authors = authors.join(', ');
        authors += lastAuthor;
    }
    return authors;
}

export default BookAuthors;