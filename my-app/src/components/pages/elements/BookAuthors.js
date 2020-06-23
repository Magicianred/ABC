//Created to add a comma or a 'e' between two or more authors
// If there isn't an author it adds 'Autore non disponibile'
const BookAuthors = (authors) => {
    if (!authors) return ' Autore non disponibile ';
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