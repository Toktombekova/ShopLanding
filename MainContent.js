import { Container } from '@material-ui/core'
import React from 'react'
import './MainContent.css'
const MainContent = () => {
    return (
        <>
        <Container padding="0">
             <div className="our_organaisation">
            <div className="content_right">
                <h1 className="content_title">Our strong organaisation</h1>
                <p className="content_text">Sint irure veniam consequat labore mollit culpa est sit consequat id non. Adipisicing qui reprehenderit cillum sit nulla culpa. Qui labore voluptate consectetur ullamco ut laborum ad adipisicing incididunt. Aliquip mollit in eu anim velit pariatur aliquip. Do pariatur ea elit adipisicing.</p>
                <button className="content_button">Contact us</button>
            </div>
            <div className="content_left">
            <iframe className="content_video" width="560" height="315" src="https://www.youtube.com/embed/UhlOUiF7yZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        </Container>
       
        </>
    )
}

export default MainContent
