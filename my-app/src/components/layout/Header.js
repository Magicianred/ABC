import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";



function Header() {
    return (
        <header className="headerStyle">
            <h1>ABC - Ace Book Club</h1>
            <NavBar />
        </header>
    )
}

export default Header;