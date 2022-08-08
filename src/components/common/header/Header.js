import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import DrawerComp from '../drawer'
import './Header.css';

const Header = () => {
    return (
        <React.Fragment>
            <AppBar color="primary">
                <Toolbar>
                    <DrawerComp />
                    <Typography fontFamily="Roboto" variant="h1" sx={{ fontSize: '28px', paddingLeft: '10%' }}> Dennis Littlefield Portfolio </Typography>

                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}
export default Header 
