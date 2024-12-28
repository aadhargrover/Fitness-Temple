import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box
    mt="80px"
    bgcolor="#1E3F66"
    sx={{
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      paddingBottom: '40px',
    }}
  >
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '400px', height: '150px' }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: '28px', xs: '20px' } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      by AADHAR GROVER
    </Typography>
  </Box>
);

export default Footer;
