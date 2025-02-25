'use client';

import { JSX } from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export interface NavItemProps {
  href: string;
  icon?: JSX.Element;
  text?: string;
}

export function NavItem({ icon, text, href }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <ListItem
      disablePadding
      sx={{
        backgroundColor: isActive ? 'primary.main' : 'inherit'
      }}
    >
      <ListItemButton href={href} LinkComponent={Link}>
        {icon && (
          <ListItemIcon sx={{ color: isActive ? 'primary.contrastText' : 'inherit' }}>
            {icon}
          </ListItemIcon>
        )}
        {text && (
          <ListItemText
            primary={text}
            sx={{ color: isActive ? 'primary.contrastText' : 'inherit' }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
}
