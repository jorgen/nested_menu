import React, { createContext, useContext } from 'react';
import { MenuItem } from '@mui/material';
import { SubMenu } from './TlcSubMenu';

interface TlcMenuItemProps {
  item: any;
  onClose: any;
  setIsInChild: any;
}

export function TlcMenuItemComponent({ item, onClose, setIsInChild } : TlcMenuItemProps) {
  if (item.subItems) {
    return (<SubMenu component={item.component} subItems={item.subItems} onClose={onClose} setIsInChild={setIsInChild}/>);
  }
  return (
    <MenuItem onClick={onClose}>
      {item.component}
    </MenuItem>
  );
}
