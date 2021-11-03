import React from 'react'
import {Container} from '@material-ui/core'
import './NavLinks.css'



const NavLinks = () => {
    return (
        <div>
            <Container>
                <ul className="header_navbar">
                    <li className="header_links"><a href="">Home</a></li>
                    <li className="header_links" ><a href=""> Portfolio</a></li>
                    <li className="header_links" ><a href=""></a> About us</li>
                    <li className="header_links" ><a href=""> Contacts</a></li>
                </ul>
            </Container>
        </div>
    )
}

export default NavLinks
