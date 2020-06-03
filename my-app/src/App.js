import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Component of the page
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

//Bootstrap Grid System
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Container fluid>
                    <Row>
                        <Col>
                            <Route path="/About" component={About}/>
                            <Route path="/Home" component={Home}/>
                        </Col>
                    </Row>
                </Container>
            </Router>
        );
    }
}

export default App;