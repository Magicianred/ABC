import React from "react";

//Component made by me
import Search from "./elements/home/Search";

//Bootstrap
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


function Home() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Jumbotron fluid className="mt-4">
                            <Search />
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
            </>
    )

}

export default Home;