import { TlcMenu } from "./TlcMenu";
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { TlcMenuItemComponent } from "./TlcMenuItem";

interface SubMenuProps {
    component: any;
    subItems: any;
    onClose: any;
}
export function SubMenu({ component, subItems, onClose }: SubMenuProps) {
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);

  const handleSubMenuOpen = (event: any) => {
    setSubMenuAnchorEl(event.target);
  };

  const handleClose = () => {
    setSubMenuAnchorEl(null);
    onClose();
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isInChild, setIsInChild] = useState(false); 
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (event: any) => {
    setIsHovered(true);
    hoverTimeout.current = setTimeout(() => {
      // Your action here (when the item has been hovered for 1 second)
      handleSubMenuOpen(event);
    }, 200); // 1000ms = 1 second
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
  };
  
  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

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
        <MenuItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          sx={{
            'width': '100%',
            'height': '100%',
            'zIndex': 1,
          }}>
          <div style={{ width: "100%", display: 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between' }}>
            {component}
            <pre style={{ float: "right" }}> ></pre>
          </div>
        </MenuItem>
      </div>
      <Menu
        anchorEl={subMenuAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        open={Boolean(subMenuAnchorEl)}
        onMouseEnter={()=>}
        onMouseLeave={()=> { }}
        onClose={handleClose}
      >
        {subItems?.map((item: any, index: any) => {
          return (<TlcMenuItemComponent key={index} item={item} onClose={handleClose} setIsInChild={isInChild}/>);
        })}
      </Menu>
    </>
  );
}