import React from 'react'
import {SwiperGallery} from '../elements'
import {Typography} from '@mui/material';

const Portfolio = () => {
    return (
        <div style={{ mx: "auto", marginTop: `80px` }}>
            <Typography fontFamily="Montserrat Alternates" variant="h2" color="primary">
                Portfolio
            </Typography>
            <hr />
            <SwiperGallery />
        </div>
    )
}

export default Portfolio