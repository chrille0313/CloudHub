'use client';

import React, { JSX } from 'react';
import { MoreVert } from '@mui/icons-material';
import { IconButton, Menu, MenuItem as MUIMenuItem, ListItemIcon, Divider } from '@mui/material';

export interface MenuItemProps {
  icon: JSX.Element;
  text: string;
  divider?: boolean;
}

function MenuItem({ icon, text, divider }: MenuItemProps) {
  return (
    <>
      <MUIMenuItem>
        <ListItemIcon>{icon}</ListItemIcon>
        {text}
      </MUIMenuItem>
      {divider && <Divider />}
    </>
  );
}

export interface MenuMoreButtonProps {
  menuItems: MenuItemProps[];
}

export default function MenuMoreButton({ menuItems }: MenuMoreButtonProps) {
  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorElement);

  return (
    <>
      <IconButton onClick={(event) => setAnchorElement(event.currentTarget)}>
        <MoreVert />
      </IconButton>
      <Menu open={menuOpen} anchorEl={anchorElement} onClose={() => setAnchorElement(null)}>
        {menuItems.flatMap((item) => (
          <MenuItem key={item.text} {...item} />
        ))}
      </Menu>
    </>
  );
}
