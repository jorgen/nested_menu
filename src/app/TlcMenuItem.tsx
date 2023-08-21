import React, { createContext, useContext } from 'react';
import { MenuItem } from '@mui/material';
import { SubMenu } from './TlcSubMenu';

interface TlcMenuItemProps {
  item: any;
  onClose: any;
  siblingMenuItemMouseOver: any; 
  setSiblingMenuItemMouseOver: any;
}

export function TlcMenuItemComponent({ item, onClose, siblingMenuItemMouseOver, setSiblingMenuItemMouseOver} : TlcMenuItemProps) {
  if (item.subItems) {
    return (<SubMenu component={item.component} subItems={item.subItems} onClose={onClose} siblingMouseOver={siblingMenuItemMouseOver} setSiblingMouseOver={setSiblingMenuItemMouseOver}/>);
  }
  return (
    <MenuItem onClick={onClose} onMouseEnter={(event:any)=>{setSiblingMenuItemMouseOver(event.currentTarget);}}>
      {item.component}
    </MenuItem>
  );
}
