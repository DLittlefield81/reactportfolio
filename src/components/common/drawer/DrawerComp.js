import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Button, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ImageAvatars from '../../ImageAvatars';

// Setup NavItems
//  About is not contained in pages as it is the Default Page.
const PAGES = ['Projects', 'Contact', 'Resume'];

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
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="success" size="large">About</Button></Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          
          {
            PAGES.map((page, index) => (
              <ListItemButton sx={{ textAlign: 'Center' }} onClick={() => setOpenDrawer(false)} key={index}>
                <ListItemIcon>
                  <ListItemText>
                    <Link to={page} style={{ textDecoration: 'none' }} >
                      <Button variant="contained" color="success" size="large">{page}</Button>
                    </Link>
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