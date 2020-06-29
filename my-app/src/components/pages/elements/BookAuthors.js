import React from "react";

//<TextTruncate /> accept ONLY string and i need this code to add the text below
export const AddDi = (authors) => {
    if (authors) return (<> di <br /></>);
    if (!authors) return (<><br /></>);
}
//Created to add a comma or a 'e' between two or more authors
// If there isn't an author it adds 'Autore non disponibile'
export const BookAuthors = (authors) => {
    if (!authors) return 'Autore non disponibile';
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
