import React from 'react'
import {SwiperGallery} from '../elements'
import {Typography} from '@mui/material';

const Portfolio = () => {
    return (
        <div style={{ mx: "auto", marginTop: `80px` }}>
            <Typography fontFamily="Josefin Sans" variant="h2" color="primary">
                Portfolio
            </Typography>
            <hr />
            <SwiperGallery sx={{}} />
        </div>
    )
}

export default Portfolio