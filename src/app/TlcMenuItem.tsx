import React, { createContext, useContext } from 'react';
import { MenuItem } from '@mui/material';
import { SubMenu } from './TlcSubMenu';

interface TlcMenuItemProps {
  item: any;
  onClose: any;
}

export function TlcMenuItemComponent({ item, onClose} : TlcMenuItemProps) {
  if (item.subItems) {
    return (<SubMenu component={item.component} subItems={item.subItems} onClose={onClose}/>);
  }
  return (
    <MenuItem onClick={onClose}>
      {item.component}
    </MenuItem>
  );
}
