import { TlcMenu } from "./TlcMenu";
import React, { useState } from 'react';
import { MenuItem } from '@mui/material';

export function SubMenu({ component, subItems }) {
    const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
    const closeAllMenus = useMenuClose();

    const handleSubMenuOpen = (event) => {
      setSubMenuAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setSubMenuAnchorEl(null);
    };
  
    return (
      <>
        <MenuItem onClick={handleSubMenuOpen}>{component}</MenuItem>
        <TlcMenu
          items={subItems}
          anchorEl={subMenuAnchorEl}
          onClose={() => {
            handleClose();
            closeAllMenus();
          }}
        />
      </>
    );
  }