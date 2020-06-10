import React from "react";
import { Link } from "react-router-dom";

//Bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const BookCard = ({ keys, title }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={"http://books.google.com/books/content?id="+ keys +"&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"} alt={title} />
            <Card.Body>
                <Card.Title className='card-title'>{title}</Card.Title>
                <Card.Text></Card.Text>
                <Link to={"/book/" + keys}><Button>Mostra Dettagli</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default BookCard;