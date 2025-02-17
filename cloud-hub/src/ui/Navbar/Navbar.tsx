import TopNavbar from './TopNavbar';
import SideNavbar from './SideNavbar';
import { PropsWithChildren } from 'react';

export interface NavbarProps extends PropsWithChildren {
  authenticated: boolean;
}

export default function Navbar({ authenticated }: NavbarProps) {
  return authenticated ? <SideNavbar /> : <TopNavbar />;
}
