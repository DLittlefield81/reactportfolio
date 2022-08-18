import React from 'react'
import { AppBar, Toolbar, Typography, Link } from '@mui/material'
import DrawerComp from '../DrawerComp'
import './Header.css';

const Header = () => {
    return (
        <React.Fragment>
            <AppBar color="primary">
                <Toolbar>
                    <DrawerComp />
                    <Link underline="none" href="/">
                        <Typography color="primary.contrastText" fontFamily="Montserrat Alternates" variant="h1" sx={{ fontSize: '35px' }}> Dennis Littlefield</Typography>
                    </Link>
                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}
export default Header 
