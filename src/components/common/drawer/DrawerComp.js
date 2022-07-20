import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Setup NavItems
const PAGES = ['About', 'Projects', 'Contact', 'Resume'];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ padding: '30px' }}>
          {
            PAGES.map((page, index) => (
              <ListItemButton sx={{ textAlign: 'Center' }}  onClick={() => setOpenDrawer(false)} key={index}>
                <ListItemIcon>
                  <ListItemText>
                    {page}
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))
          }
        </List>
      </Drawer>
      <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp