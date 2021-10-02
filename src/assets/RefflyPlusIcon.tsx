import * as React from 'react';
import AddLink from '@mui/icons-material/AddLink';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.refflyplus.primary,
    color: theme.palette.refflyplus.primary,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    width: '10px',
    height: '10px',
    borderRadius: '5px',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default function RefflyPlus() {
  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      <Avatar
        variant="rounded"
        sx={{ bgcolor: 'grey.800', }}
      >
        <AddLink
          style={{ transform: 'rotate(-50deg)' }}
          sx={{ color: 'common.white', fontWeight: 'bold', fontSize: 35 }}
          color="primary"
        />
      </Avatar>
    </StyledBadge>
  );
}
