// components/NavBar.tsx
import React from 'react';
import Link from 'next/link';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Navbar: React.FC = () => {
  return (
    <BottomNavigation
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigationAction 
        label="Home" 
        icon={<HomeIcon />} 
        component={Link} 
        href="/" 
      />
      <BottomNavigationAction 
        label="Profile" 
        icon={<AccountCircleIcon />} 
        component={Link} 
        href="/profil" 
      />
      <BottomNavigationAction 
        label="Post" 
        icon={<PostAddIcon />} 
        component={Link} 
        href="/prispevok" 
      />
      <BottomNavigationAction 
        label="Login" 
        icon={<LoginIcon />} 
        component={Link} 
        href="/auth/prihlasenie" 
      />
      <BottomNavigationAction 
        label="Register" 
        icon={<PersonAddIcon />} 
        component={Link} 
        href="/auth/registracia" 
      />
    </BottomNavigation>
  );
};

export default Navbar;
