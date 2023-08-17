import React, { createContext, useContext, useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { TlcMenuItemComponent } from './TlcMenuItem';

interface TlcMenuProps {
  items: any;
  anchorEl: any;
  onCloseMenu: any;
}
export function TlcMenu({ items, anchorEl, onCloseMenu }: TlcMenuProps) {
  const [menuVisible, setMenuVisible] = useState(true);
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{vertical:'top', horizontal:'right'}}
      keepMounted
      open={anchorEl}
      onClose={()=>{ onCloseMenu();}}
    >
      {items?.map((item: any, index: React.Key | null | undefined) => {
        return (<TlcMenuItemComponent key={index} item={item} onClose={onCloseMenu}/>);
      })}
    </Menu>
  );
}