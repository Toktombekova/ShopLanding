import React from 'react'
import {Container, Grid} from '@material-ui/core'
import './Gallery.css'
import pink from  '../image/images.png'
const Gallery = () => {
    return (
        <div>
            <Container>
            <div className="gallery_links">
                <ul className="gallery_ul">
                <li className="gallery_li">All</li>
                <li className="gallery_li"> Prit Template</li>
                <li className="gallery_li"> Web Template</li>
                <li className="gallery_li"> User Interface</li>
                <li className="gallery_li"> Mock Up </li>
                </ul>
            </div>
            <div className="gallery_images">
                    <Grid container spacing={12}>
                        <Grid item lg={3}>
                            <img className="gallery_img" src={pink} alt=""/> 
                        </Grid>
                        <Grid item lg={3}>
                            <img className="gallery_img" src={pink} alt=""/> 
                        </Grid>
                        <Grid item lg={3}>
                            <img className="gallery_img" src={pink} alt=""/> 
                        </Grid>
                        <Grid item lg={3}>
                            <img className="gallery_img" src={pink} alt=""/> 
                        </Grid>
                        <Grid item lg={3}>
                            <img className="gallery_img" src={pink} alt=""/> 
                        </Grid>
                        <Grid item lg={3}>
                            <img className="gallery_img" src={pink} alt=""/> 
                        </Grid>
                        <Grid item lg={3}>
                            <img className="gallery_img" src={pink} alt=""/> 
                        </Grid>
                        <Grid item lg={3}>
                            <img className="gallery_img" src={pink} alt=""/> 
                        </Grid>
                    </Grid>
            </div>
            </Container>
        </div>
    )
}

export default Gallery
