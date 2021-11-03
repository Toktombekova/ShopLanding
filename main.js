import React from 'react'
import MainContent from './MainContent';
import NavLinks from './NavLinks'
import './main.css'
const Main = () => {
    return (
        <div className="main_back">
            <NavLinks/>
            <MainContent/>
        </div>
    )
}

export default Main;
