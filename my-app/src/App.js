import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Component made by me
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Error404 from "./components/pages/Error404";
import InfoPage from "./components/pages/InfoPage";
import MainFooter from "./components/layout/MainFooter";
import Credits from "./components/pages/Credits";

//CSS page create by me
import "./index.css";

const App = () => {
    return (
                    <Router>
                        <Header />

                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/About" component={About}/>
                            <Route path="/Home" component={Home}/>
                            <Route path="/Credits" component={Credits}/>
                            <Route path="/book/:bookId" exact component={InfoPage} />
                            <Route path="*" component={Error404} />
                        </Switch>


                        <MainFooter />

                    </Router>
            );
};

export default App;