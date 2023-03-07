import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const StyledLink = styled('a')({
  textDecoration: 'none',
  color: '#fff',
  marginLeft: '20px',
});

function MyAppBar() {
  return (
    <AppBar position="static" color="primary">
      <StyledToolbar>
        <Typography variant="h6" component="div">
          <Link href="/">
          CantusIQ
          </Link>
        </Typography>
        <div>
          <StyledLink href="/analytics">Analytics</StyledLink>
          <StyledLink href="/smart-contracts">Smart Contracts</StyledLink>
          <StyledLink href="/marketplace">Marketplace</StyledLink>
          <StyledLink href="/content-library">Content Library</StyledLink>
          <StyledLink href="/settings">Settings</StyledLink>
        </div>
      </StyledToolbar>
    </AppBar>
  );
}

export default MyAppBar;
