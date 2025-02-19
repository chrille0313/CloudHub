import { SideNavbar } from '@/ui/Navbar';
import { Box } from '@mui/material';

export type AuthenticatedLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  return (
    <Box display="flex">
      <SideNavbar />
      {children}
    </Box>
  );
}
