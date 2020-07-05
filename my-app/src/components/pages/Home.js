import React, { useState } from "react";
import { createBrowserHistory } from 'history';

//Component made by me
import Search from "./elements/home/Search";

//Bootstrap
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";



const Home = ({ match }) => {
    const {
        params: { searchBook },
    } = match;

    const [book, setBook] = useState('');
    const [params, setParams] = useState(null);
    const [searchClick, setSearchClick] = useState(null);

    const history = createBrowserHistory();

    if(params === null){
        setParams(new URLSearchParams(history.location.search));
    }


    if(!book && searchBook && searchClick === null) {
        setBook(searchBook);
        setSearchClick(true);
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Jumbotron fluid className="mt-4">
                            <Search
                                searchBook={[book, setBook]}
                                searchClick={[searchClick, setSearchClick]}
                                searchParams={[params, setParams]}
                            />

                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </>
    )


}

export default Home;