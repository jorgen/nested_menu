import { TlcMenu } from "./TlcMenu";
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { TlcMenuItemComponent } from "./TlcMenuItem";

interface SubMenuProps {
    component: any;
    subItems: any;
    onClose: any;
    siblingMouseOver: any;
    setSiblingMouseOver: any;
}
export function SubMenu({ component, subItems, onClose, siblingMouseOver, setSiblingMouseOver}: SubMenuProps) {
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [menuItemTarget, setMenuItemTarget] = useState(null);

  const [subSiblingMouseOver, setSubSiblingMouseOver] = useState(null);
  const handleSubMenuOpen = (target: any) => {
    setSubMenuAnchorEl(target);
  };

  const handleClose = () => {
    setSubMenuAnchorEl(null);
    onClose();
  };

  useEffect(() => {

    let timer : NodeJS.Timeout;
    if (siblingMouseOver == menuItemTarget)
    {
      timer = setTimeout(() => {
        if (siblingMouseOver == menuItemTarget)
          handleSubMenuOpen(siblingMouseOver);
      }, 1000);
    }
    else
    {
      timer = setTimeout(() => {
        if (siblingMouseOver != menuItemTarget)
          handleClose(); 
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [siblingMouseOver]);

  function handleMouseEnter(event: any) {
    setMenuItemTarget(event.currentTarget);
  }

  return (
    <>
      <div style={{ 'position': 'relative' }}>
        <div style={{
          'position': 'absolute',
          'width': '100%',
          'height': '100%',
          'background': "#000",
          'opacity': Boolean(subMenuAnchorEl) ? 0.45 : 0.0,
          'zIndex': 2,
          'pointerEvents': 'none',
        }} />
        <MenuItem onMouseEnter={handleMouseEnter}
          sx={{
            'width': '100%',
            'height': '100%',
            'zIndex': 1,
          }}>
          <div style={{ width: "100%", display: 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between' }}>
            {component}
            <pre style={{ float: "right" }}> &gt;</pre>
          </div>
        </MenuItem>
      </div>
      <Menu
        anchorEl={subMenuAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        open={Boolean(subMenuAnchorEl)}
        onMouseEnter={()=>{}}
        onMouseLeave={()=> { }}
        onClose={handleClose}
      >
        {subItems?.map((item: any, index: any) => {
          return (<TlcMenuItemComponent key={index} item={item} onClose={handleClose} siblingMenuItemMouseOver={subSiblingMouseOver} setSiblingMenuItemMouseOver={subSiblingMouseOver}/>);
        })}
      </Menu>
    </>
  );
}