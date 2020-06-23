import React from "react";

//Bootstrap
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//Credits of ABC project
function Credits() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Jumbotron fluid className="mt-4 text-center crediti">
                            <h1>Crediti</h1>
                            <p>Sito creato da <a className="linkCrediti" href="https://www.carmensantoro.it">Santoro Carmen Agnese</a></p>
                            <p>Font Hanged Letters di <a className="linkCrediti" href="https://www.dafont.com/it/profile.php?user=686913">Hareesh Seela</a></p>
                            <p>Favicon di <a className="linkCrediti" href="https://creativemarket.com/eucalyp" title="Eucalyp">Eucalyp</a> da <a className="linkCrediti" href="https://www.flaticon.com/" title="Flaticon">Flaticon</a></p>
                            <p>Icona del bottone di ricerca di <a className="linkCrediti" href="https://smashicons.com/" title="Smashicons">Smashicons</a> da <a className="linkCrediti" href="https://www.flaticon.com/" title="Flaticon">Flaticon</a> </p>
                            <p>Icona di Darth Vader di <a className="linkCrediti" href="https://pixabay.com/it/users/GG125FR-8315858/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3215554">Gaëtan GUINÉ</a> da <a className="linkCrediti" href="https://pixabay.com/it/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3215554">Pixabay</a></p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Credits;