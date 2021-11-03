import React from 'react'
import { Grid } from '@material-ui/core'
import person from '../image/images.png'
import './People.css'
const People = () => {
    return (
        <div className="people_parts">
            <div className="people_right">
                <img className="people_person" src={person} alt=""/>
            </div>
            <div className="people_left">
                <div className="left_content">
                    <h2 className="person_name">Mark waugh</h2>
                    <p className="about_person">Tempor irure reprehenderit dolore deserunt mollit commodo do pariatur laborum. Nisi sit et occaecat do minim eu laboris consectetur aliqua incididunt. Fugiat nisi velit quis aliqua fugiat ut. Pariatur anim sit exercitation amet magna elit aliqua aliquip ipsum adipisicing veniam labore. Ex amet dolore anim deserunt ad aliquip eiusmod mollit. Nostrud incididunt et aute dolor do sunt quis deserunt exercitation eiusmod.</p>
                        <ul className="person_websites">
                           <li className="person_links"><a href="">Facebook</a></li>
                           <li className="person_links"><a href="">Facebook</a></li>
                           <li className="person_links"><a href="">Facebook</a></li>
                           <li className="person_links"><a href="">Facebook</a></li>
                        </ul>
                </div>
                <div className="people_images">
                    <Grid container spacing={12}>
                        <Grid item lg={3}><img className="persons" src={person} alt=""/></Grid>
                        <Grid item lg={3}><img className="persons"src={person} alt=""/></Grid>
                        <Grid item lg={3}><img className="persons" src={person} alt=""/></Grid>
                        <Grid item lg={3}><img className="persons" src={person} alt=""/></Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default People
