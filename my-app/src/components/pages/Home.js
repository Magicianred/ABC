import React from "react";
import Search from "./Search";

//Bootstrap Jumbotron
import Jumbotron from "react-bootstrap/Jumbotron";


function Home() {
    return (
        <React.Fragment>
            <Jumbotron fluid>
                        <Search />
            </Jumbotron>
        </React.Fragment>
    )

}

export default Home;