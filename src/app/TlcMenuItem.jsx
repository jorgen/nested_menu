import React, { createContext, useContext } from 'react';
import { MenuItem } from '@mui/material';
import { SubMenu } from './TlcSubMenu';

export function useMenuClose() {
  return useContext(MenuCloseContext);
}

export function TlcMenuItemComponent({ item  }) {
  const closeMenu = useMenuClose();

  if (item.subItems) {
    return <SubMenu component={item.component} {...item.subItems} />;
  }
  return (
    <MenuItem onClick={closeMenu}>
      {item.component}
    </MenuItem>
  );
}
