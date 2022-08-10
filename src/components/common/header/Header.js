import React from 'react'
import { AppBar, Toolbar, Typography, Link } from '@mui/material'
import DrawerComp from '../drawer'
import './Header.css';

const Header = () => {
    return (
        <React.Fragment>
            <AppBar color="primary">
                <Toolbar>
                    <DrawerComp />
                    <Link underline="none" href="/reactportfolio/">
                        <Typography color="secondary" fontFamily="Josefin Sans" variant="h1" sx={{ fontSize: '35px' }}> Dennis Littlefield</Typography>
                    </Link>
                </Toolbar>

            </AppBar>
        </React.Fragment>
    )
}
export default Header 
