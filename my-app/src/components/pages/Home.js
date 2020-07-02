
import React, { useState } from "react";

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

    console.log(searchBook);

    const [book, setBook] = useState('');
    const [searchClick, setSearchClick] = useState(false);
    if(!book && searchBook) {
        setBook(searchBook);
        setSearchClick(true);
    }

    return (
      <>
          <Container fluid>
              <Row>
                  <Col>
                      <Jumbotron fluid className="mt-4">
                          <Search searchBook={[book, setBook]} searchClick={[searchClick, setSearchClick]}/>

                      </Jumbotron>
                  </Col>
              </Row>
          </Container>
      </>
    )


}

export default Home;