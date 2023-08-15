import React, { createContext, useContext } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { TlcMenuItemComponent } from './TlcMenuItem';

const MenuCloseContext = createContext();

export function TlcMenu({ items, anchorEl, onClose }) {
  return (
    <MenuCloseContext.Provider value={onClose}>
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{vertical:'top', horizontal:'right'}}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      {items.map((item, index) => {
        <TlcMenuItemComponent key={index} item={item} />
      })}
    </Menu>
    </MenuCloseContext.Provider>
  );
}