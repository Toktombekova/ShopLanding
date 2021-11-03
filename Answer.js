import { Container , Grid } from '@material-ui/core'
import React from 'react'
import './Answer.css'
import png from '../image/settings.png'

const Answer = () => {
    return (
        <>
        <Container>
             <div className="answer_parts">
                <div className="answer_right">
                    <h1 className="answer_title">Do you know we can provide for you ?</h1>
                    <p className="content_text">Sint irure veniam consequat labore mollit culpa est sit consequat id non. Adipisicing qui reprehenderit cillum sit nulla culpa. Qui labore voluptate consectetur ullamco ut laborum ad adipisicing incididunt. Aliquip mollit in eu anim velit pariatur aliquip. Do pariatur ea elit adipisicing.</p>
                    <button className="answer_button">Learn More</button>
                </div>
                <div className="answer_left">
                    <Grid container spacing={6}>
                        <Grid item lg={6}>
                          <img className="settings" src={png} alt=""/>
                          <h3 className="answer_service">Managment</h3>
                          <p>Consectetur id fugiat anim elit duis proident ex duis est velit deserunt ullamco aliqua. Ad quis dolore ipsum cupidatat. Minim veniam et labore anim tempor culpa sunt nisi pariatur non. Quis dolore esse sit culpa sint irure quis labore esse.</p>
                        </Grid>
                        <Grid item lg={6}>
                          <img className="settings" src={png} alt=""/>
                          <h3 className="answer_service">Managment</h3>
                          <p>Consectetur id fugiat anim elit duis proident ex duis est velit deserunt ullamco aliqua. Ad quis dolore ipsum cupidatat. Minim veniam et labore anim tempor culpa sunt nisi pariatur non. Quis dolore esse sit culpa sint irure quis labore esse.</p>
                        </Grid>
                        <Grid item lg={6}>
                          <img className="settings" src={png} alt=""/>
                          <h3 className="answer_service">Managment</h3>
                          <p>Consectetur id fugiat anim elit duis proident ex duis est velit deserunt ullamco aliqua. Ad quis dolore ipsum cupidatat. Minim veniam et labore anim tempor culpa sunt nisi pariatur non. Quis dolore esse sit culpa sint irure quis labore esse.</p>
                        </Grid>
                        <Grid item lg={6}>
                          <img className="settings" src={png} alt=""/>
                          <h3 className="answer_service">Managment</h3>
                          <p>Consectetur id fugiat anim elit duis proident ex duis est velit deserunt ullamco aliqua. Ad quis dolore ipsum cupidatat. Minim veniam et labore anim tempor culpa sunt nisi pariatur non. Quis dolore esse sit culpa sint irure quis labore esse.</p>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <hr className="answer_hr"/>
        </Container>
           
        </>
    )
}

export default Answer;
