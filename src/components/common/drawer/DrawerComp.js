import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {Button, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ImageAvatars from '../../ImageAvatars';
import './DrawerComp.css'

// Setup NavItems
//  About is not contained in pages as it is the Default Page.
const PAGES = [ 'Portfolio','Contact', 'Resume'];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ padding: '30px' }}>
          <ImageAvatars />
          <ListItemButton sx={{ textAlign: 'Center' }} onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <NavLink to="/" style={({ isActive }) => ({
                  fontFamily: 'Helvetica',
                  fontSize: '20px',
                  textDecoration: 'none',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  padding: '10px',
                  paddingLeft: '50px',
                  paddingRight: '50px',
                  boxShadow: '3px 5px 5px #888888',
                  color: isActive ? '#000' : '#545e6f',
                  background: isActive ? '#f0f0f0' : '#A6D1E6',
                })}
                >
                 About</NavLink>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          
          {
            PAGES.map((page, index) => (
              <ListItemButton sx={{ textAlign: 'Center' }} onClick={() => setOpenDrawer(false)} key={index}>
                <ListItemIcon>
                  <ListItemText>
                    <NavLink to={page} style={({ isActive }) => ({
                      fontFamily: 'Helvetica',
                      fontSize: '20px',
                      textDecoration: 'none',
                      justifyContent: 'center',
                      borderRadius: '10px',
                      padding: '10px',
                      paddingLeft: '50px',
                      paddingRight: '50px',
                      boxShadow: '3px 5px 5px #888888',
                      color: isActive ? '#000' : '#545e6f',
                      background: isActive ? '#f0f0f0' : '#A6D1E6',
                    })}
                    >
                      {page}
                    </NavLink>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))
          }
        </List>
      </Drawer>
      <IconButton sx={{ color: 'white', marginRight: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp