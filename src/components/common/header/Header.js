import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import DrawerComp from '../drawer'

const Header = () => {
    return (
        <React.Fragment>
            <AppBar sx={{ background: "blue" }}>
                <Toolbar>
                    <DrawerComp />
                    <Typography sx={{ fontSize: '1.5em', paddingLeft: '10%' }}> Dennis Littlefield Portfolio </Typography>

                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}
export default Header 
