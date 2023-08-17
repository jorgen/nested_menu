'use client'
import Image from 'next/image'
import styles from './page.module.css'

import React, { useState } from 'react';
import { Menu, MenuItem, Button, Checkbox} from '@mui/material';

import { TlcMenu } from './TlcMenu';

export default function Home() {
  const [anchorEl, setAnchorEl] = useState(null);

  const menuItems = [
    { component: <Checkbox /> },
    {
      component: 'Option with SubMenu',
      subItems: [
        { component: 'Sub Option 1' },
        { component: <Checkbox onClick={(event)=> {event.stopPropagation();}}/> },
        {
          component: 'more stuff',
          subItems: [
            { component: <Checkbox/> },
            { component: 'Sub Option 4' }, 
          ]
        }
      ],
    },
    { component: 'Option 3' },
  ];

  const handleClick = (event : any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any) => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-haspopup="true" onClick={handleClick}>
        Open Menu 5
      </Button>
      <TlcMenu items={menuItems} anchorEl={anchorEl} onCloseMenu={handleClose} />
    </div>
  );
}
