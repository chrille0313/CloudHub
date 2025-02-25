import { TopNavbar } from '@/ui/Navbar';
import { Box } from '@mui/material';

export default function UnauthenticatedLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box display="flex">
      <TopNavbar />
      {children}
    </Box>
  );
}
