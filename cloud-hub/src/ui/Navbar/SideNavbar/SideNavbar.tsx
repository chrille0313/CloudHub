import { Avatar, Drawer, List, Stack, Typography } from '@mui/material';
import { Settings, Logout, Cloud, Groups, Dashboard } from '@mui/icons-material';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { NavItem } from './NavItem';

export default async function SideNavbar() {
  const drawerWidth = 240;

  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          justifyContent: 'space-between'
          // backgroundColor: 'primary.main',
          // color: 'primary.contrastText'
        }
      }}
    >
      <List>
        <Stack alignItems="center" gap="0.75rem" padding="2rem">
          <Avatar alt={user?.name} sx={{ width: 100, height: 100 }} />
          <Typography variant="h6">{user?.name}</Typography>
        </Stack>
        <NavItem href="/dashboard" icon={<Dashboard />} text="Dashboard" />
        <NavItem href="/clouds" icon={<Cloud />} text="My clouds" />
        <NavItem href="/shared" icon={<Groups />} text="Shared clouds" />
      </List>
      <List>
        <NavItem href="/settings" icon={<Settings />} text="Settings" />
        <NavItem href="/sign-out" icon={<Logout />} text="Log out" />
      </List>
    </Drawer>
  );
}
