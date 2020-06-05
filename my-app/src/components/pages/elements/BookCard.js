import React from "react";

//Bootstrap Card
import Card from "react-bootstrap/Card";


import Button from "react-bootstrap/Button";

const BookCard = ({ title, link, image }) => {

    if(!image || image === "N/A"){
        return null;
    }

    return (
        <Card style={ { width: '233px' } } className="m-auto">
            <Card.Img variant="top" style= { { width: '100%', height: '233px'} } src={image} alt="Card image" />
    <Card.Body>
        <a href={link} target="_blank">
            <Card.Title className='card-title'>{title}</Card.Title>
            </a>
    <Button>More info</Button>
</Card.Body>
</Card>
    );
};

export default BookCard;