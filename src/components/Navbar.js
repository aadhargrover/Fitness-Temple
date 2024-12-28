import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: '123px', xs: '40px' },
      mt: { sm: '32px', xs: '20px' },
      justifyContent: 'none',
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: '48px', height: '48px', margin: '0px 20px' }}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#F8F8F8',
          borderBottom: '3px solid #FF2625',
          transition: 'color 0.3s ease, border-color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#FF2625';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#F8F8F8';
        }}
      >
        HOME
      </Link>

      <a
        href="#exercises"
        style={{
          textDecoration: 'none',
          color: '#F8F8F8',
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#FF2625';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#F8F8F8';
        }}
      >
        EXERCISES
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
