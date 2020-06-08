import React from "react";

//Bootstrap Card
import Card from "react-bootstrap/Card";


//Bootstrap Button
import Button from "react-bootstrap/Button";


const BookCard = ({ keys, title }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={"http://books.google.com/books/content?id="+ keys +"&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"} alt={title} />
            <Card.Body>
                <Card.Title className='card-title'>{title}</Card.Title>
                <Card.Text></Card.Text>
                <Button>More info</Button>
            </Card.Body>
        </Card>
    );
};

export default BookCard;