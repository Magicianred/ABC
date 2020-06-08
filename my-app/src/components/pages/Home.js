import React from "react";
import Search from "./elements/home/Search";

//Bootstrap Jumbotron
import Jumbotron from "react-bootstrap/Jumbotron";


function Home() {
    return (
        <React.Fragment>
            <Jumbotron fluid className="mt-4">
                        <Search />
            </Jumbotron>
        </React.Fragment>
    )

}

export default Home;