import { Container } from '@material-ui/core'
import React from 'react'
import People from './People'
import './Team.css'
const Team = () => {
    return (
        <div>
            <Container>
                <div className="team_content">
                <h2 className="team_title">meet our team</h2>
                <p className="team_text">Incididunt dolor reprehenderit incididunt labore. Est in consequat laborum laborum fugiat sint excepteur enim. Quis magna dolore aliqua proident mollit laborum excepteur Lorem. Exercitation et culpa commodo velit excepteur minim velit tempor nisi mollit nulla deserunt dolor do. Nisi ut nisi cillum ex. Id ad nisi ullamco aliquip culpa anim sint.</p>
               <div className="line"></div>
                </div>
                <People/>
            </Container>
        </div>
    )
}

export default Team
