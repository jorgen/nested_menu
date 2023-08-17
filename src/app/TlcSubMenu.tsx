import { MenuCloseContext, TlcMenu } from "./TlcMenu";
import React, { useContext, useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { TlcMenuItemComponent } from "./TlcMenuItem";

interface SubMenuProps {
    component: any;
    subItems: any;
    onClose: any;
}
export function SubMenu({ component, subItems, onClose } : SubMenuProps) {
    const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);

    const handleSubMenuOpen = (event: any) => {
      setSubMenuAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setSubMenuAnchorEl(null);
      onClose();
    };
 
    return (
      <>
        <MenuItem onClick={handleSubMenuOpen}>
          {component}
        </MenuItem>
        <Menu
          anchorEl={subMenuAnchorEl}
          anchorOrigin={{vertical:'top', horizontal:'right'}}
          keepMounted
          open={Boolean(subMenuAnchorEl)}
          onClose={()=>{ handleClose();}}
        >
          {subItems?.map((item: any, index: any) => {
            return (<TlcMenuItemComponent key={index} item={item} onClose={handleClose}/>);
          })}
        </Menu>
      </>
    );
  }